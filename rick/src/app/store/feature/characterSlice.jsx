import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch data for multiple characters
export const fetchData = createAsyncThunk(
  "characters/fetchData",
  async ({ page = 1, query = "" }) => {
    try {
      const base_url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${encodeURIComponent(query)}`;
      const res = await fetch(base_url);
      const characterData = await res.json();
      return characterData;
    } catch (error) {
      throw error;
    }
  }
);

// Fetch a single character by ID
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

// Initial state for the character slice
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
  singleCharacter: null,
  recentVisitedProfile: [],
  searchQuery: "", // Search query for filtering characters
  searchHistory: [], // Store search history
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    // Set the current search query
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    // Add the search query to the search history (limiting to 5 queries)
    addSearchToHistory: (state, action) => {
      const newHistory = [action.payload, ...state.searchHistory].slice(0, 5); // Limit to 5 search queries
      state.searchHistory = newHistory;
    },
    // Set recent visited profiles
    setRecentProfile: (state, action) => {
      state.recentVisitedProfile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle the fetch data for multiple characters
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
      
      // Handle the fetch data for a single character by ID
      .addCase(fetchCharacterById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharacterById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleCharacter = action.payload;
      })
      .addCase(fetchCharacterById.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const {
  setSearchQuery,
  addSearchToHistory,
  setRecentProfile,
} = characterSlice.actions;

// Selectors to get the current state
export const selectData = (state) => state.characters.characters;
export const selectSingleCharacter = (state) => state.characters.singleCharacter;
export const selectPagination = (state) => state.characters.pagination;
export const selectDataStatus = (state) => state.characters.status;
export const selectSearchQuery = (state) => state.characters.searchQuery;
export const selectSearchHistory = (state) => state.characters.searchHistory;  // New selector for search history

export default characterSlice.reducer;
