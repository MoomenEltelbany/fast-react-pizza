import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [
        {
            pizzaId: 1,
            name: "Cheese Lovers",
            quantity: 2,
            unitPrice: 17,
            totalPrice: 34,
        },
    ],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            // action.payload = newPizzaItem
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            // action.payload = the selected pizza ID
            state.cart.filter((item) => item.pizzaId !== action.payload);
        },
        increaseItemQuantity(state, action) {},
        decreaseItemQuantity(state, action) {},
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
