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

const drugsSlice = createSlice({
  name: "drugs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrugs.fulfilled, (state, action) => {
        state.drugs = action.payload;
      })
  },
});

export default drugsSlice.reducer;
