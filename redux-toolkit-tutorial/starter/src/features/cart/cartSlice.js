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
        }
    }
})

// console.log(cartSlice);

export const { clearCart } = cartSlice.actions

export default cartSlice.reducer