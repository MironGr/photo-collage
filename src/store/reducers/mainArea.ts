import { 
  Reducer, 
  Action,
  PayloadAction, 
  createReducer
} from '@reduxjs/toolkit' 

import { setShowEditModal } from 'src/store/actions/mainArea'
import { State } from 'src/store/stateType'


export const initialState = {
  showEditModal: false
}

export const mainArea: Reducer<typeof initialState, Action> = createReducer(initialState, builder => {
  builder
    .addCase(setShowEditModal, (state: State["main"], action: PayloadAction<boolean>) => {
      state.showEditModal = action.payload
    })
})

export interface MainArea {
  showEditModal: boolean
}

