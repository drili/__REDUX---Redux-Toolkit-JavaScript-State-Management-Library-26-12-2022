import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
    isOpen: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState: initialModalState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true
        },
        closeModal: (state, action) => {
            state.isOpen = false
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer