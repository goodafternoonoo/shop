import { configureStore, createSlice } from '@reduxjs/toolkit';
import data from './data';
import { user } from './store/userSlice';

const shoes = createSlice({
    name: 'shoes',
    initialState: data,
    reducers: {
        setShoes(state, { payload }) {
            return [...payload];
        },
    },
});

const cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 },
    ],
    reducers: {},
});

export const { setShoes } = shoes.actions;

export default configureStore({
    reducer: {
        shoes: shoes.reducer,
        cart: cart.reducer,
        user: user.reducer,
    },
});
