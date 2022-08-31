import {  configureStore } from '@reduxjs/toolkit'
import applicationSlice from '../feauters/applicationSlice'

export const store = configureStore({
    reducer: {
        applicationSlice
    }
})