import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "language",
  initialState: {
    lang: "en",
  },
  reducers: {
    getSelectLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { getSelectLang } = configSlice.actions;
export default configSlice.reducer;
