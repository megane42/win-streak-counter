import firebase from "./firebase"

const collection = firebase.firestore().collection("matchResults")

export const subscribe = (handler) => {
  collection
    .orderBy("createdAt", "desc")
    .onSnapshot((querySnapshot) => {
      handler(querySnapshot.docs)
    })
}

export const add = (matchResult) => {
  collection
    .add({
      matchResult: matchResult,
      createdAt: firebase.firestore.Timestamp.now(),
    })
}
