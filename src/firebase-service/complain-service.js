import { addDoc, collection, query, getDocs, where } from "firebase/firestore"; 
import { firestoreDb } from "../Components/Firebase/Config";

export async function createComplain(complain) {
    return await addDoc(collection(firestoreDb, "complains"), complain);
}

export async function listComplain(email) {
    const _query = query(
      collection(firestoreDb, 'complains'),
      where('createdBy', '==', email)
    );
    const querySnapshot = await getDocs(_query);

    const list = [];
    querySnapshot.forEach((doc) =>{
        list.push(doc.data())
    });
    return list;
  }
