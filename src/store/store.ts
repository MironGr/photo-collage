import { configureStore } from '@reduxjs/toolkit' 
import createSagaMiddleware from "redux-saga"

import { rootSaga } from 'src/store/sagas'
import { rootReducer } from './reducers'

export const createStore = () => {
  // use { createSlice } from '@reduxjs/toolkit' or { Reducer } from '@reduxjs/toolkit'
  const reducer = rootReducer
  const middleware = []
  const devTools: boolean = process.env.NODE_ENV !== 'production'
  const preloadedState = {} // initial state

  // add saga
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  const store = configureStore({
    reducer,
    middleware,
    devTools,
    preloadedState,
    // enhancers: []
  })

  // run saga
  sagaMiddleware.run(rootSaga)

  return store
}