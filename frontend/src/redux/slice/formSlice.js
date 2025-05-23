import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const submitForm = createAsyncThunk(
  "form/submitForm",
  async (formData, { rejectWithValue }) => {

    try {
      console.log("Aayush");
      
      const response = await fetch("https://mubychem.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      return await response.json();
    } catch (error) {
      console.log("rohan");
      
      return rejectWithValue(error.message);
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState: {
    status: null,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.status = "success";
        state.error = null;
        state.message = "Form is submitted";
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formSlice.reducer;