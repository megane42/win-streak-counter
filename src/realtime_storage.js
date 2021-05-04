import firebase from "./firebase"

const collection = firebase.firestore().collection("results")

export const subscribe = (handler) => {
  collection
    .orderBy("created_at", "desc")
    .onSnapshot((querySnapshot) => {
      handler(querySnapshot.docs)
    })
}

export const add = (result) => {
  collection
    .add({
      result: result,
      created_at: firebase.firestore.Timestamp.now(),
    })
}
