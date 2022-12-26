import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems"

const initialCartState = {
    cartItems : cartItems,
    amount: 4,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            // console.log(action);
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        increase: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount = cartItem.amount + 1

            console.log(payload.title);
        },
        decrease: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount = cartItem.amount - 1

            console.log(payload.title);
        }
    }
})

// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions

export default cartSlice.reducer