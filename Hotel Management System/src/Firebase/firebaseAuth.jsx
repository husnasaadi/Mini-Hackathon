import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';  
import { onAuthStateChanged } from 'firebase/auth';

onAuthStateChanged(auth, async (user) => {
  if (user) {
    try {
      // Ensure the Firestore instance and collection name are correct
      await addDoc(collection(db, 'yourCollection'), {
        dataField: 'dataValue',
        userId: user.uid,  // Optional: Store the user ID with the document
      });
      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  } else {
    console.log("User is not authenticated.");
  }
});
