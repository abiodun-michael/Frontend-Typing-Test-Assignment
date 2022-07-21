import { configureStore } from '@reduxjs/toolkit'
import typingReducer from './reducer/index'


const store = configureStore({
  reducer: {
    typeData:typingReducer.reducer
  }
})

export default store
