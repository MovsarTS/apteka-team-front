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

export const deleteBasket = createAsyncThunk(
    'basket/delete',
    async ({userId, drugId}, thunkAPI) => {
        console.log(1);
        try {
            const res = await fetch(`http://localhost:3030/basket/delete/${userId}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ drugId })
            })
            
            const basket = await res.json()
            return { drugId, userId }
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
})
export const buyByBasket = createAsyncThunk('basket/buy', async ({userId}, thunkAPI) => {
    
    try {
        const res = await fetch(`http://localhost:3030/basket/${userId}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({basket: [] })
        })
        
        const basket = await res.json()
    
        return userId
    } catch (e) {
        thunkAPI.rejectWithValue(e)
    }
})


const usersSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.user = action.payload
        })
        .addCase(deleteBasket.fulfilled, (state, action) => {
            state.user = state.user.map((user) => {
                if (user._id === action.payload.userId){
                    console.log(user);
                    user.basket = user.basket.filter((drug) => {
                        return drug._id !== action.payload.drugId
                    })
                    
                }
                return user
            })
        })
        .addCase(buyByBasket.fulfilled, (state, action) => {
            state.user = state.user.map((user) => {
                if (user._id === action.payload){
                    console.log(action.payload);
                    console.log(user);
                    user.basket = user.basket.filter((drug) => {
                        return false
                    })
                }
                return user
            })
        })
    }
})


export default usersSlice.reducer