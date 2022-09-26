import { Action, configureStore, ThunkAction, Store } from '@reduxjs/toolkit'
import createSagaMiddleware, { Task } from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import { persistStore, persistReducer, Persistor } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootSaga from '../sagas'
import rootReducer from '../slices/reducers'
import myConfig from 'src/9.config/myConfig'

export interface SagaStore extends Store {
  sagaTask: Task
  reduxPersistData: Persistor
}

let newRootReducer = rootReducer

export const enableReduxPersist = myConfig.reduxPersistConfigs.enabled && myConfig.isClientSide

if (enableReduxPersist) {
  newRootReducer = persistReducer(
    {
      ...myConfig.reduxPersistConfigs,
      storage
    },
    rootReducer
  )
}

export const persistedReducer = newRootReducer
export const createReduxStore = (): SagaStore => {
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({
    reducer: newRootReducer,
    middleware: [sagaMiddleware],
    devTools: myConfig.isDevEnv
  })

  ;(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)

  ;(store as SagaStore).reduxPersistData = enableReduxPersist ? persistStore(store) : persistStore(store)

  return store as SagaStore
}

export type ReduxStore = ReturnType<typeof createReduxStore>
export type ReduxState = ReturnType<ReduxStore['getState']>
export type ReduxThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, Action>

export const reduxWrapper = createWrapper<ReduxStore>(createReduxStore, {
  debug: myConfig.isDevEnv
})
