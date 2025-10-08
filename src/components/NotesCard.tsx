import React, { useState } from 'react';

const initialNotes = [
  { id: 1, text: 'First note', done: false },
  { id: 2, text: 'Second note', done: false },
];

const NotesCard: React.FC = () => {
  const [notes, setNotes] = useState(initialNotes);

  const toggleDone = (id: number) => {
    setNotes(notes =>
      notes.map(note =>
        note.id === id ? { ...note, done: !note.done } : note
      )
    );
  };

  return (
    <div className="card">
      <h3>Notes</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {notes.map(note => (
          <li
            key={note.id}
            style={{
              background: note.done ? '#c8e6c9' : '#fff',
              marginBottom: '0.5em',
              padding: '0.5em',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <input
              type="checkbox"
              checked={note.done}
              onChange={() => toggleDone(note.id)}
              style={{ marginRight: '1em' }}
            />
            <span
              style={{
                textDecoration: note.done ? 'line-through' : 'none',
                color: note.done ? 'green' : 'inherit',
                fontWeight: note.done ? 'bold' : 'normal',
              }}
            >
              {note.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesCard;
