import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Ensure you have a rootReducer file or replace it with your actual reducer

export const store = configureStore({
    reducer: {
        counter: counterReducer
      },
});

export default store;

















