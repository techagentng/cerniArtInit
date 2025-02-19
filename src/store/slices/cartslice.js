import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Array of cart items
    totalItems: 0, // Total count of items in the cart
    isCartOpen: false,
    isFormOpen: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;

            // Check if the item is already in the cart
            const existingItem = state.items.find((item) => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1; // Increment quantity if item exists
            } else {
                state.items.push({ ...product, quantity: 1 }); // Add new item
            }

            // Recalculate totalItems
            state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;

            const itemIndex = state.items.findIndex((item) => item.id === productId);
            if (itemIndex !== -1) {
                state.totalItems -= state.items[itemIndex].quantity; // Update total items
                state.items.splice(itemIndex, 1); // Remove item from cart
            }
        },
        clearCart: (state) => {
            state.items = []; // Clear all items
            state.totalItems = 0; // Reset total item count
        },
        incrementItem: (state, action) => {
            const productId = action.payload;

            const existingItem = state.items.find((item) => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1; // Increment item quantity
            }

            // Recalculate totalItems
            state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
        },
        decrementItem: (state, action) => {
            const productId = action.payload;

            const existingItem = state.items.find((item) => item.id === productId);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1; // Decrement quantity
                } else {
                    // Remove the item if quantity reaches zero
                    const itemIndex = state.items.indexOf(existingItem);
                    state.items.splice(itemIndex, 1);
                }
            }

            // Recalculate totalItems
            state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
        },
        setCartOpen: (state, action) => {
            state.isCartOpen = action.payload; // Set the cart open/close state
        },
        setFormOpen: (state, action) => {
            state.isFormOpen = action.payload; // Set the cart open/close state
        }
    }
});

export const { addToCart, removeFromCart, clearCart, incrementItem, decrementItem, setCartOpen, setFormOpen } = cartSlice.actions;

export default cartSlice.reducer;
