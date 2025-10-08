import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimerState {
  seconds: number;
  isRunning: boolean;
}

const initialState: TimerState = {
  seconds: 0,
  isRunning: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    start: (state) => {
      state.isRunning = true;
    },
    pause: (state) => {
      state.isRunning = false;
    },
    reset: (state) => {
      state.seconds = 0;
      state.isRunning = false;
    },
    tick: (state) => {
      if (state.isRunning) {
        state.seconds += 1;
      }
    },
    setSeconds: (state, action: PayloadAction<number>) => {
      state.seconds = action.payload;
    },
  },
});

export const { start, pause, reset, tick, setSeconds } = timerSlice.actions;
export default timerSlice.reducer;
