// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk("productFetch", async () => {
//   try {
//     const apiURL = "https://project-2.technative.dev.f90.co.uk/products/wolf";

//     const response = await fetch(apiURL, {
//       headers: { Accept: "application/json" },
//     });
//     const data = await response.json();
//     return data.url;
//   } catch (error) {
//     console.log("error: " + error);
//   }
// });

// const initialState = {
//   imageURL: "/images/products/wolf/curry.jpg",
//   isLoading: false,
//   hasError: null,
// };

// const config = {
//   name: "product",
//   initialState,
//   reducers: {}, // don't need
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.isLoading = true;
//         state.hasError = null;

//         // display default duck
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         // change duck image to new random duck
//         // updating state - change duck img to state
//         state.isLoading = false;
//         state.hasError = null;
//         state.imageURL = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         // display an error
//         state.isLoading = false;
//         state.hasError = action.error.message;
//       });
//   },
// };

// const productkSlice = createSlice(config);

// export default productkSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await fetch(
        "https://project-2.technative.dev.f90.co.uk/products/wolf"
      );
      const data = await response.json();
      return data.products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
