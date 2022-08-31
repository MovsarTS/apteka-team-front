import {  configureStore } from '@reduxjs/toolkit'
import applicationSlice from '../feauters/applicationSlice'
import categorySlice from '../feauters/categorySlice'
import drugsSlice from '../feauters/drugsSlice'

export const store = configureStore({
    reducer: {
        applicationSlice,
        categorySlice,
        drugsSlice
    }
})