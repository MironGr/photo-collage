import { combineReducers } from '@reduxjs/toolkit'

import { mainArea, MainArea } from './mainArea'
import { editModal, EditModal} from './editModal'

export const rootReducer = combineReducers({
  main: mainArea,
  editModal: editModal
})

export interface RootReducer {
  main: MainArea,
  editModal: EditModal
}