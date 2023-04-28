import {combineReducers, configureStore} from '@reduxjs/toolkit'
import registerReducer from './registerSlice'

// export const store = configureStore({
//   reducer: {
//     register: registerReducer,
//   },
// })

export const USER_LOGOUT = '@@logout/USER_LOGOUT'


const combinedReducer = combineReducers({
  register: registerReducer,
});


const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return combinedReducer(state, action);
};


export const store = configureStore({
  reducer: rootReducer,
})

