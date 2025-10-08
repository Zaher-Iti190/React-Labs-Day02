import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import counterReducer from './features/counterSlice';
import timerReducer from './features/timerSlice';
import notesReducer from './features/notesSlice';
import usersReducer from './features/usersSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    timer: timerReducer,
    notes: notesReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
