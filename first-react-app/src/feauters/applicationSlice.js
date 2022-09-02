import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    signingUp: false,
    signingIn: false,
    error: null,
    token: localStorage.getItem('token'),
    name: localStorage.getItem('name')
}


export const authSignUp = createAsyncThunk(
    'auth/signUp',
    async ({ login, password }, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:3030/user", {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ login, password })
            })

            const json = await res.json()

            return json
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

export const authSignIn = createAsyncThunk(
    'auth/signIn',
    async ({ login, password }, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:3030/login", {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ login, password })
            })

            const token = await res.json()

            localStorage.setItem('token', token.token)
            localStorage.setItem('name', token.name)

            return token
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)


const applicationSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(authSignUp.pending, (state) => {
            state.signingUp = true;
            state.error = null;
        })
        .addCase(authSignUp.fulfilled, (state, action) => {
            state.signingUp = false;
            state.error = null;
        })
        .addCase(authSignIn.pending, (state) => {
            state.signingIn = true;
            state.error = null;
        })
        .addCase(authSignIn.fulfilled, (state, action) => {
            state.signingIn = false;
            state.error = null;
            state.token = action.payload.token;
            state.name = action.payload.name;
        })
    }
})


export default applicationSlice.reducer