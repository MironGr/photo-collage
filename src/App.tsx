import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"

import './App.scss';

import { setShowEditModal } from 'src/store/actions/mainArea'
import { State } from 'src/store/stateType'
import { MainArea } from 'src/components/mainArea/index'
import { Header } from 'src/components/header/index'
import { Settings } from 'src/components/settings/index'
import { EditModal } from 'src/components/editModal'


const App: React.FC = () => {
  // const showEditModal = useSelector<State, boolean>(state => state?.mainArea?.showEditModal)
  // @ts-ignore
  const showEditModal = useSelector<State, boolean>(state => state.main.showEditModal)
  console.log('showEditModal - ', showEditModal)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('showEditModal 1 - ', showEditModal)
  }, [showEditModal])

  // TODO: может быть нужно перенести в сам компонент EditModal?
  const handleEsc = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if(e.code === 'Escape') {
      dispatch(setShowEditModal(false))
    }
  }
  
  return (
    <div
      onKeyUp={(e) => {
        handleEsc(e)
      }}
      tabIndex={0}
    >
      <div className='root-wrapper'>
        <div className='workspace'>
          <Header/>
          <div className='workspace__tools'>
            <MainArea />
            <Settings />
          </div>
        </div>
        
        {/* <EditModal /> */}
      </div>
      {showEditModal && <EditModal />}
    </div>
  );
}

export default App;
