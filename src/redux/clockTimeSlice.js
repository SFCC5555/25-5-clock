import { createSlice } from "@reduxjs/toolkit";

const initialState = { minutes: 0, seconds: 0 };

export const clockTimeSlice = createSlice({
  name: 'clockTime',
  initialState,
  reducers: {
    changeClockTime: (state, action) => {
      state.minutes = action.payload.minutes;
      state.seconds = action.payload.seconds;
    },
  },
});

export const { changeClockTime } = clockTimeSlice.actions;
export default clockTimeSlice.reducer;