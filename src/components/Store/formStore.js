import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  coverLetter: '',
  resume: null, 
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetFormData: () => initialState, 
  },
});

export const { updateFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;
