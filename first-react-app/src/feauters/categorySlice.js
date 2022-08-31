import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    category: [],
}

export const fetchCategory = createAsyncThunk('fetch/category', async (_, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:3030/category');
        const data = await res.json();
        return data;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
})

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategory.fulfilled, (state, action) => {
            state.category = action.payload;
        })
    }
});

export default categorySlice.reducer;