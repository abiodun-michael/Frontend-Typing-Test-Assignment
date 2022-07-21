import { createSlice } from '@reduxjs/toolkit'

const typingSlice = createSlice({
  name: 'typing',
  initialState: {
    answer:"",
    challenge:`This is a simple app for users to test and improve their typing skills.`,
    status:false,
    isEnded:false
  },
  reducers: {
    addChallenge: (state,action) => {
      state.challenge = action.payload
    },
    addAnswer: (state,action) => {
      state.answer = action.payload
    },
    changeStatus: (state,action) => {
      state.status = action.payload
    },
    changeIsEnded: (state,action) => {
      state.isEnded = action.payload
    }
  }
})

export const { addAnswer,addChallenge,changeStatus, changeIsEnded} = typingSlice.actions

export default typingSlice
