import { createSlice } from "@reduxjs/toolkit";
import { generateKeys } from "../../utils/generateKeys";

const initialState = {
  sequence: generateKeys(),
  currentIndex: 0,
  total: 0,
  correct: 0,
  timeLeft: 300,
  isRunning: false,
};

const typingSlice = createSlice({
  name: "typing",
  initialState,
  reducers: {
    startTest: (state) => {
      state.isRunning = true;
    },

    typeKey: (state, action) => {
      if (!state.isRunning) return;

      const expected = state.sequence[state.currentIndex];
      const typed = action.payload;

      state.total++;

      if (typed === expected) {
        state.correct++;
        state.currentIndex++;
      }

      if (state.currentIndex >= state.sequence.length) {
        state.sequence = generateKeys();
        state.currentIndex = 0;
      }
    },

    tick: (state) => {
      if (state.timeLeft > 0 && state.isRunning) {
        state.timeLeft--;
      }
    },

    reset: () => initialState,
  },
});

export const { startTest, typeKey, tick, reset } = typingSlice.actions;
export default typingSlice.reducer;
