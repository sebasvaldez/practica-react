import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
console.log(uid)
    const newNote = {
      title: "Probando nuevo titulo",
      body: "Probando nuevo cuerpo",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    const setDocResp = await setDoc(newDoc, newNote);

    //!dispatch
    //dispatch (newNote)
    //dispatch (activarNote)
  };
};
