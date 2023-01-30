import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: "0", name: "John Doe" },
    { id: "1", name: "Sam Smith" },
  ],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

const { reducer, actions } = userSlice;

export default reducer;
