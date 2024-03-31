import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter/CounterSlice'
import authReducer from './Authentication/AuthSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer, // Adding authReducer to the store
      },
})