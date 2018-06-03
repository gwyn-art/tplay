import * as firebase from "firebase"
import FirebaseConfig from "./keys"

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.firestore()
export const invitesRef = databaseRef.collection('invites')
export const authRef = firebase.auth()