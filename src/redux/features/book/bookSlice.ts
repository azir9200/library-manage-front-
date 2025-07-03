import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: "",
  name: "",
  description: "",
  price: "",
  image: "",
  ratings: "",
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    
  }
  })