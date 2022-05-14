import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'Update_Cart',
    initialState: {
        picture: null,
        title: "",
        price: null,
        quantity: 0,
    },
    reducers: {
        add_cart: (state, action) => {
            state.quantity = 0;
            state.quantity = action.payload;
        },
        remove_cart: (state) => {
            state.quantity = 0
        },
        add_pic: (state, action) => {
            state.picture = action.payload
        },

        add_title: (state, action) => {
            state.title = action.payload
        },

        add_price: (state, action) => {
            state.price = action.payload
        }
    }
})

export const { add_cart, remove_cart, add_pic, add_title, add_price } = cartSlice.actions

export default cartSlice.reducer