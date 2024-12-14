import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  centiseconds: 0, // Centiseconds: 100 units per second
  seconds: 0,
  minutes: 0,
  hours: 0,
  isRunning: false,
};

const stopWatchSlice = createSlice({
  name: "stopwatch",
  initialState,
  reducers: {
    startStopWatch: (state) => {
      state.isRunning = true;
    },
    pauseStopWatch: (state) => {
      state.isRunning = false;
    },
    resetStopWatch: (state) => {
      state.isRunning = false;
      state.centiseconds = 0;
      state.seconds = 0;
      state.minutes = 0;
      state.hours = 0;
    },
    tick: (state) => {
      if (!state.isRunning) return;

      state.centiseconds += 1;

      if (state.centiseconds === 100) {
        state.centiseconds = 0;
        state.seconds += 1;
      }

      if (state.seconds === 60) {
        state.seconds = 0;
        state.minutes += 1;
      }

      if (state.minutes === 60) {
        state.minutes = 0;
        state.hours += 1;
      }
    },
  },
});

export default stopWatchSlice.reducer;
export const { startStopWatch, pauseStopWatch, resetStopWatch, tick } =
  stopWatchSlice.actions;
