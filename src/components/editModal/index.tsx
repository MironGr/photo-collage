import React from "react"
import { useDispatch, useSelector } from "react-redux"
// import cx from 'classnames'

import './editModal.scss'

import { State } from 'src/store/stateType'
import { setShowEditModal } from 'src/store/actions/mainArea'


type Props = {
  // left: number,
  // top: number,
  // r: number,
  // stroke: string,
  // strokeWidth: number,
}

export const EditModal: React.FC<Props> = () => {

  const dispatch = useDispatch()
  const picture = useSelector<State, string>(state => state.editModal.urlPicture)

  

  return <div className="edit-modal">
    <div className="edit-modal__window">
      <div className="edit-modal__window_wrapper">
        <div className="edit-modal__close">
          <button 
            className="edit-modal__close_button"
            onClick={() => dispatch(setShowEditModal(false))}
          >
            Close
          </button>
        </div>
        <div className="edit-modal__main-area">
          {/* TODO: Высота / ширина окна с картинкой будет зависеть он соотношения
          сторон загружаемого изображения */}
          <div className="edit-modal__main-area_left">
          {picture && <img 
            src={picture} 
            alt='alt'
            height='200px'
            className=""
          />}
          </div>
          <div className="edit-modal__main-area_rigth">
            <div className="edit-modal__tool">
              <div className="edit-modal__tool_logo"/>
              <div>Select part</div>
            </div>
            <div className="edit-modal__tool">
              <div className="edit-modal__tool_logo"/>
              <div>Rotate</div>
            </div>
            <div className="edit-modal__tool">
              <div className="edit-modal__tool_logo"/>
              <div>Filtres</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}