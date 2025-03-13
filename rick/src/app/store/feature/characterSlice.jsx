import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Existing fetchData for multiple characters
export const fetchData = createAsyncThunk(
  "characters/fetchData",
  async ({ page = 1 , query="" }) => {
    try {
      const base_url = `https://rickandmortyapi.com/api/character/?page=${page} &name=${encodeURIComponent(query)} `;
      const res = await fetch(base_url);
      const characterData = await res.json();
      return characterData;
    } catch (error) {
      throw error;
    }
  }
);

// New async thunk to fetch a single character by ID
export const fetchCharacterById = createAsyncThunk(
  "characters/fetchCharacterById",
  async (id) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();
      return data;
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
  singleCharacter: null,  // Store single character data
  recentVisitedProfile: [],
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setRecentProfile: (state, action) => {
      state.recentVisitedProfile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handling fetchData (multiple characters)
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
      })
      // Handling fetchCharacterById (single character)
      .addCase(fetchCharacterById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharacterById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleCharacter = action.payload;  // Store the single character data
      })
      .addCase(fetchCharacterById.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

// Selectors
export const { setRecentProfile } = characterSlice.actions;
export const selectData = (state) => state.characters.characters;
export const selectSingleCharacter = (state) => state.characters.singleCharacter;  // New selector for single character
export const selectPagination = (state) => state.characters.pagination;
export const selectDataStatus = (state) => state.characters.status;

export default characterSlice.reducer;
