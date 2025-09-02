import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    // cart: [
    //     {
    //         pizzaId: 1,
    //         name: "Cheese Lovers",
    //         quantity: 2,
    //         unitPrice: 17,
    //         totalPrice: 34,
    //     },
    // ],
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
            state.cart = state.cart.filter(
                (item) => item.pizzaId !== action.payload,
            );
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

export const getCart = (state) => state.cart.cart;

export const getTotalPizzaQuantity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalPizzaPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0);
