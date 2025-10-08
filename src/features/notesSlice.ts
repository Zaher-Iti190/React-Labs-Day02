import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Note {
  id: number;
  text: string;
  done: boolean;
}

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [
    { id: 1, text: 'First note', done: false },
    { id: 2, text: 'Second note', done: false },
  ],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    toggleDone: (state, action: PayloadAction<number>) => {
      const note = state.notes.find(n => n.id === action.payload);
      if (note) note.done = !note.done;
    },
    addNote: (state, action: PayloadAction<string>) => {
      state.notes.push({ id: Date.now(), text: action.payload, done: false });
    },
    removeNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter(n => n.id !== action.payload);
    },
  },
});

export const { toggleDone, addNote, removeNote } = notesSlice.actions;
export default notesSlice.reducer;
