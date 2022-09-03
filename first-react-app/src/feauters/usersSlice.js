import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: []
}


export const fetchUsers = createAsyncThunk(
    'fetch/users',
    async (_, thunkAPI) => {
        try {
            const res = await fetch ('http://localhost:3030/user')

            const user = await res.json()

            return user;
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)


const usersSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
})


export default usersSlice.reducer