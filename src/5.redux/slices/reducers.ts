import { HYDRATE } from "next-redux-wrapper"
import { combineReducers } from "@reduxjs/toolkit"
import type { AnyAction, CombinedState } from "@reduxjs/toolkit"

interface ReducerState {
  // [youtubeSlice.name]: ReturnType<typeof youtubeSlice.reducer>
}

const sliceReducer = {
  // [youtubeSlice.name]: youtubeSlice.reducer
}

const rootReducer = (state: any, action: AnyAction): CombinedState<ReducerState> => {
  // Doc: https://github.com/kirill-konshin/next-redux-wrapper#state-reconciliation-during-hydration
  if (action.type === HYDRATE) {
    // console.log(
    //  "🚀 ~ file: reducer.ts ~ line 20 ~ from hydration",
    //  action,
    //  mainConfig.isClientSide,
    //  state
    // );

    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    }

    nextState.user = state.user // preserve user data on client side navigation

    return nextState
  }

  return combineReducers(sliceReducer)(state, action)
}

export default rootReducer
