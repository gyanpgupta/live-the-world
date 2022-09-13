
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import modalReducer from './slices/ModalSlice';
import activityReducer from './slices/ActivitySlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        modal: modalReducer,
        activity: activityReducer,
    },
})