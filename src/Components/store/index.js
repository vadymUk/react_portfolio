import { configureStore } from '@reduxjs/toolkit';
import reducer from './slice/portfolioSlice';
import { sendValueForm } from '../sendForm/sendForm';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: {
        portfolio: reducer,
        [sendValueForm.reducerPath]: sendValueForm.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware, sendValueForm.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;