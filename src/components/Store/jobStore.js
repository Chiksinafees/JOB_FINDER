import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
  selectedJob: null,
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    selectJob: (state, action) => {
        state.selectedJob = action.payload;
      },
      
  },
});

export const { setJobs, selectJob } = jobSlice.actions;
export default jobSlice.reducer;
