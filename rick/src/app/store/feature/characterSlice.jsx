import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "characters/fetchData",
  async ({ page = 1 }) => {
    try {
      const base_url = `https://rickandmortyapi.com/api/character/?page=${page}`;
      const res = await fetch(base_url);
      const characterData = await res.json();
      return characterData;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  characters: [],
  status: "",
  error: "",
  pagination: {
    count: 0,
    pages: 0,
    prev: "",
    next: "",
  },
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.characters = action.payload.results; 
        state.pagination = {
          count: action.payload.info?.count,
          pages: action.payload.info?.pages,
          prev: action.payload.info?.prev,
          next: action.payload.info?.next,
        };
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectData = (state) => state.characters.characters;
export const selectPagination = (state) => state.characters.pagination;
export const selectDataStatus = (state) => state.characters.status;  // Here is the selector you need

export default characterSlice.reducer;
