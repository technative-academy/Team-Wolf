import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MdDescription } from "react-icons/md";

// Thunk
export const makeAskRequest = createAsyncThunk(
  "ask/makeAskRequest",
  async (params) => {
    const apiURL = `https://project-2.technative.dev.f90.co.uk/ai/wolf?query=${params}`;

    try {
      const response = await fetch(apiURL, {
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        if (response.status === 500) {
          return [{ title: "Please enter a question...", description: "" }];
        } else {
          return [
            { title: "Sorry there is an issue with our bot", description: "" },
          ];
        }
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
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
        state.result = [{ title: "Pending", description: "..." }];
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
