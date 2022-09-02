import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  drugs: [],
  amount: null
};

export const fetchDrugs = createAsyncThunk(
  "Drugs/Fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3030/alldrugs");

      const drugs = await res.json();

      return drugs;
      
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const amountPlus = createAsyncThunk(
  "amountPlus/Patch",
  async ({drugId, amount}, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3030/amountPlus", {
        method: 'PATCH',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({drugId, amount})
      });

      const drugs = await res.json();

      return drugs;
      
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);
export const amountMinus = createAsyncThunk(
  "amountMinus/Patch",
  async ({drugId, amount}, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3030/amountMinus", {
        method: 'PATCH',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({drugId, amount})
      });

      const drugs = await res.json();

      return drugs;
      
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);


const drugsSlice = createSlice({
  name: "drugs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchDrugs.fulfilled, (state, action) => {
      state.drugs = action.payload;
    })
    .addCase(amountPlus.fulfilled, (state, action) => {
      state.amount = action.payload.inBasket
    })
    .addCase(amountMinus.fulfilled, (state, action) => {
      state.amount = action.payload.inBasket
    })
  },
});

export default drugsSlice.reducer;
