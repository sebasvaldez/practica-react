import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote } from "./";
import { loadNotes } from "../../helpers";

export const startNewNote = () => {

  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    const { uid } = getState().auth;
    console.log(uid);
    const newNote = {
      title: "Probando nuevo titulo",
      body: "Probando nuevo cuerpo",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;
    //!dispatch
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("No se encuentra un uid");

    const notes= await loadNotes(uid);
    dispatch(setNotes(notes));



  };
};


export const startSaveNote= ()=>{
  return async (dispatch, getState)=>{

    dispatch(setSaving())

    const {uid}= getState().auth;
    const {active:note} = getState().journal;
    const noteToFirestore = {...note};
    delete noteToFirestore.id;
    const docRef= doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFirestore,{merge:true});

    dispatch(updateNote(note))



  }
}
