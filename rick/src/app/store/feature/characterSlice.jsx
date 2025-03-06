import { createAsyncThunk, createSlice, combineSlices } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk("characters/fetchData", async () => {
  try {
    const Url_path = "https://rickandmortyapi.com/api/character";
    const res = await fetch(Url_path);
    const characterData = await res.json();
    console.log(characterData, "data ");
    return characterData;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  characters: [], 
  visitedprofile:[]
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      console.log(action.payload, "payload");
      state.characters = action.payload;
    });
  },
});

export const characterData = (state) => state.characters.characters?.results;
export const rootReducer = combineSlices(characterSlice);
export default characterSlice.reducer;

