import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
 
// Define a type for the slice state
interface modalState {
    registermodal: boolean
    loginModal: boolean

}

// Define the initial state using that type
const initialState: modalState = {
    registermodal: false,
    loginModal: false
}

export const modalSlice = createSlice({
  name: 'modal',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    registerModalFun: (state) => {
        state.registermodal = !state.registermodal

    },
    loginModalFun: (state) => {
        state.loginModal = !state.loginModal
    },
   
  },
})

export const { registerModalFun, loginModalFun } = modalSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default modalSlice.reducer