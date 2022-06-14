import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import cx from 'classnames'

import './imgZone.scss'

import { State } from 'src/store/stateType'
import { setShowEditModal } from 'src/store/actions/mainArea'
import { setUrlPictureEditModul } from 'src/store/actions/editModal'

type Props = {
  left: number,
  top: number,
  r: number,
  stroke: string,
  strokeWidth: number,
}

export const ImgZone: React.FC<Props> = ({
  left,
  top,
  r,
  stroke,
  strokeWidth
}) => {

  const dispatch = useDispatch()
  const showEditModal = useSelector<State, boolean>(state => state.main.showEditModal)

  const wh = {
    width: r * 2,
    height: r * 2,
  }
  const [isDragOver, setIsDragOver] = useState<boolean>(false)
  const [url, setUrl] = useState<string>()
  // {console.log('isDragOver.current - ', isDragOver.current)}

  return <div 
    className="image-zone"
    style={{
      ...wh,
      outline: `${strokeWidth}px ${stroke} solid`,
      left: left,
      top: top,
    }}
  >
    <button onClick={() => {
      console.log('click')
        dispatch(setShowEditModal(!showEditModal))
      }}> Edit </button>
    <div 
      className={cx({
        "image-zone__wrapper": !url
      })}
      style={wh}
    >
      <label
        htmlFor="image-zone__input"
        className={cx(
          "image-zone__plaseholder",
          {
            "image-zone__plaseholder_dropover": isDragOver
          }
        )}
        style={wh}
      />
      <input 
        type='file'
        accept="image/*"
        id="image-zone__input"
        className="image-zone__input"
        style={wh}
        onChange={(e) => {
          console.log('e - ', e)
          if(e.target.files && e.target.files[0]) {
            const reader = new FileReader()
            reader.onload = (ev) => {
              console.log('onload ev 1 - ', ev.target?.result)
              console.log('onload ev - ', ev)
              setUrl(reader.result?.toString())
              reader.result && dispatch(setUrlPictureEditModul(reader.result.toString()))
              // setUrl(e.target.value)
              dispatch(setShowEditModal(true))
            }
            reader.readAsDataURL(e.target.files[0])
            console.log('reader - ', reader)
            console.log('reader.result - ', reader.result)
            
            // if (typeof reader.result === 'string') {
            //   console.log('reader.result - ', reader.result)
            //   setUrl(reader.result)
            // }
            console.log('! e - ', )
            setShowEditModal(true)
          }
          // console.log('123 - ', e.target.files[0])
        }}
        onDrop={(e) => {
          console.log('DROP')
        }}
        onDragOver={(e) => {
          setIsDragOver(true)
        }}
        onDragLeave={(e) => {
          setIsDragOver(false)
        }}
      />
      {url && <img 
        src={url} 
        alt='alt'
        height='200px'
        className="image-zone__icon"
      />}
      {!url && <svg 
        className="image-zone__icon"
        viewBox="0 0 92 92" 
        width='72' 
        height='72'
      >
        <path
          d="M72.5,46.5c0,2.5-2,4.5-4.5,4.5H50v17c0,2.5-2,4.5-4.5,4.5S41,70.5,41,68V51H24c-2.5,0-4.5-2-4.5-4.5
            s2-4.5,4.5-4.5h17V24c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5v18h18C70.5,42,72.5,44,72.5,46.5z"
        />
      </svg>}
    </div>
  </div>
}