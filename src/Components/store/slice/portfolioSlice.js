import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    defaultClass: 'menu'
};

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        setDefaultClass: (state) => {
            state.defaultClass = 'menu';
        },
        setActiveClass: (state) => {
            state.defaultClass = 'menu active';
        }
    }
});

const {actions, reducer} = portfolioSlice;

export default reducer;


export const {
    setDefaultClass,
    setActiveClass
} = actions;