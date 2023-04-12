import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
    name: 'user',
    initialState: { name: 'kim', age: 20 },
    reducers: {
        changeName(state) {
            state.name = 'park';
        },
        increase(state, { payload }) {
            state.age += payload;
        },
    },
});

export const { changeName, increase } = user.actions;
