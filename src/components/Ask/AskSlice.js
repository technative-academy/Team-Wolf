import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MdDescription } from "react-icons/md";

// Thunk
export const makeAskRequest = createAsyncThunk(
  "ask/makeAskRequest",
  async (params) => {
    //const params = "what+are+the+best+dinosaurs";
    const apiURL = `https://project-2.technative.dev.f90.co.uk/ai/wolf?query=${params}`;
    const response = await fetch(apiURL, {
      headers: { Accept: "application/json" },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data.results;
  }
);

const initialState = {
  result: [],
  isLoading: false,
  error: null,
};

const config = {
  name: "ask",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(makeAskRequest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.result = [{title:"Pending", description:"..."}];
      })
      .addCase(makeAskRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.result = action.payload;
      })
      .addCase(makeAskRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
};

const askSlice = createSlice(config);

export default askSlice.reducer;
