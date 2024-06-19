import { createSlice } from "@reduxjs/toolkit";
import { set, update } from "firebase/database";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: true,
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
    addNewEmptyNote: (state, action) => {},
    setActiveNote: (state, action) => {},
    setNotes: (state, action) => {},
    setSaving: (state) => {},
    updateNote: (state, action) => {},
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
} = journalSlice.actions;
