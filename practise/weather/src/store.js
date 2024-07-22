// store.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice'; // Example reducer

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here
  },
});

export default store;
