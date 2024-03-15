import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "John",
  lastName: "Doe",
  otherNames: "Patrick",
  photoUrl: "",
  dob: "01/01/1990",
  placeOfBirth: "New York, USA",
  nationality: "American",
  sex: "Male",
  passportNumber: "ABC123456",
  issueDate: "01/01/2020",
  expiryDate: "01/01/2030",
};

export const userInfoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = userInfoSlice.actions;

export default userInfoSlice.reducer;
