import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        incremented: state => {
            state.count += 1
        },
        decremented: state => {
            state.count -= 1
        },
        incrementedByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});

export const { incremented, decremented, incrementedByAmount } = counterSlice.actions;

export default counterSlice.reducer;