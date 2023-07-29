import { configureStore, createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
  },
  reducers: {
    addCharacters: (state, action) => {
      state.characters.push(...action.payload); // Use push to add new characters to the array
    },
  },
});

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
  },
  reducers: {
    changeSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

const genderSlice = createSlice({
  name: "gender",
  initialState: {
    gender: "",
  },
  reducers: {
    changeGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

const statusSlice = createSlice({
  name: "status",
  initialState: {
    status: "",
  },
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

const speciesSlice = createSlice({
  name: "species",
  initialState: {
    species: "",
  },
  reducers: {
    changeSpecies: (state, action) => {
      state.species = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    gender: genderSlice.reducer,
    status: statusSlice.reducer,
    species: speciesSlice.reducer,
    characters: charactersSlice.reducer,
  },
});

export const { changeSearchQuery } = searchSlice.actions;
export const { changeGender } = genderSlice.actions;
export const { changeStatus } = statusSlice.actions;
export const { changeSpecies } = speciesSlice.actions;
export const { addCharacters } = charactersSlice.actions;

export default store;