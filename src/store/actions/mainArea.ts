import { createAction } from '@reduxjs/toolkit' 

import { actionTypes } from 'src/store/actionTypes'


export const setShowEditModal = createAction<boolean>(actionTypes.SET_EDIT_MODAL)
