import { 
  Reducer, 
  Action,
  PayloadAction, 
  createReducer
} from '@reduxjs/toolkit' 

import { setUrlPictureEditModul } from 'src/store/actions/editModal'
import { State } from 'src/store/stateType'


export const initialState = {
  urlPicture: ''
}

export const editModal: Reducer<typeof initialState, Action> = createReducer(initialState, builder => {
  builder
    .addCase(setUrlPictureEditModul, (state: State["editModal"], action: PayloadAction<string>) => {
      state.urlPicture = action.payload
    })
})

export interface EditModal {
  urlPicture: string
}

