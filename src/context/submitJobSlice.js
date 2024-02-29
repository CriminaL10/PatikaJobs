import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  submitList: [],
};

const submitJobSlicer = createSlice({
  name: 'submit',
  initialState,
  reducers: {
    submitJob: (state, action) => {
      state.submitList = state.submitList.concat(action.payload);
    },
  },
});

export const {submitJob} = submitJobSlicer.actions;

export default submitJobSlicer.reducer;
