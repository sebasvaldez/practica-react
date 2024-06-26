import { createSlice } from "@reduxjs/toolkit";



export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    savedMessage: "",
    notes: [],
    active: null,
    // active: {
    //   id: "abc123",
    //   title: "Hello",
    //   body: "World",
    //   date: 12312,
    //   imageUrls: [],
    // },
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false

    },
    setActiveNote: (state, action) => {
      state.active = action.payload
      state.savedMessage = ""
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {
      state.isSaving = true,
      state.savedMessage = ""
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) =>{

        if(note.id === action.payload.id){
          return action.payload;
        }
        return note
      })

      state.savedMessage = `${action.payload.title}, actualizada correctamente!`

    },
    deleteNoteById: (state, action) => {},
  },
});


export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  savingNewNote
} = journalSlice.actions;
