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
    reducers: {
        increase(state, { payload }) {
            const result = state.find((item) => item.id === payload);
            if (result) result.count += 1;
        },
        add(state, { payload }) {
            const result = {
                id: payload.id,
                name: payload.title,
                count: 1,
            };
            state.push(result);
        },
    },
});

export const { setShoes } = shoes.actions;
export const { increase, add } = cart.actions;

export default configureStore({
    reducer: {
        shoes: shoes.reducer,
        cart: cart.reducer,
        user: user.reducer,
    },
});
