import { createAction } from '@reduxjs/toolkit' 

import { actionTypes } from 'src/store/actionTypes'


export const setUrlPictureEditModul = createAction<string>(actionTypes.SET_URL_EDIT_MODAL)