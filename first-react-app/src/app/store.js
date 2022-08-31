import {  configureStore } from '@reduxjs/toolkit'
import applicationSlice from '../feauters/applicationSlice'
import categorySlice from '../feauters/categorySlice'

export const store = configureStore({
    reducer: {
        applicationSlice,
        categorySlice,
    }
})