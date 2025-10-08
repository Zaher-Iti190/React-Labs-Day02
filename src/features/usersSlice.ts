import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  notFound: boolean;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  notFound: false,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) throw new Error('Failed to fetch users');
  return (await response.json()) as User[];
});

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id: string, { rejectWithValue }) => {
  if (!id) {
    // If no id, fetch all users
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed to fetch users');
    return { users: await response.json(), notFound: false };
  }
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (response.status === 404) {
    return { users: [], notFound: true };
  }
  if (!response.ok) return rejectWithValue('Failed to fetch user');
  return { users: [await response.json()], notFound: false };
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = null;
        state.notFound = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = null;
        state.notFound = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching users';
        state.notFound = false;
      })
      .addCase(fetchUserById.pending, state => {
        state.loading = true;
        state.error = null;
        state.notFound = false;
      })
      .addCase(fetchUserById.fulfilled, (state, action: PayloadAction<{ users: User[]; notFound: boolean }>) => {
        state.loading = false;
        state.users = action.payload.users;
        state.notFound = action.payload.notFound;
        state.error = null;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching user';
        state.notFound = false;
      });
  },
});

export default usersSlice.reducer;
