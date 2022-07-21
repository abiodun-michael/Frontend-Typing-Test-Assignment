import { createSlice } from '@reduxjs/toolkit'

const typingSlice = createSlice({
  name: 'typing',
  initialState: {
    answer:"",
    challenge:`The user needs to type the paragraph in another text box as it is. For each correct word, he will get 1 point for each incorrect word he types he will receive 0 points. Total points will be the total no of words in the paragraph.
    At the end of the test, the user will be presented with his score which is his typing accuracy and speed.
    `,
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
