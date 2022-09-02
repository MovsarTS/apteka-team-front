import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    basket:[]
}

export const fetchBasket = createAsyncThunk('basket/fetch', async (userId, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:3030/basket', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ userId })
        })
        const basket = await res.json()
        return basket
        
    } catch (e) {
        thunkAPI.rejectWithValue(e)
    }
})
export const patchBasket = createAsyncThunk('basket/patch', async ({userId, drug}, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:3030/basket', {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ userId, drug })
        })
        
        const basket = await res.json()
        return basket
    } catch (e) {
        thunkAPI.rejectWithValue(e)
    }
})
export const deleteBasket = createAsyncThunk('basket/delete', async ({userId, drugId}, thunkAPI) => {
    console.log(userId, drugId);
    try {
        const res = await fetch(`http://localhost:3030/basket/delete${userId}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ drugId })
        })
        
        const basket = await res.json()
        console.log(basket);
        return basket
    } catch (e) {
        thunkAPI.rejectWithValue(e)
    }
})

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBasket.fulfilled, (state, action) => {

            state.basket = action.payload.basket
        })
    }
})

export default basketSlice.reducer