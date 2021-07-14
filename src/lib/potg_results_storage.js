import firebase from './firebase'

const collection = firebase.firestore().collection('potgResults')

export const subscribe = (handler) => {
  collection
    .onSnapshot((querySnapshot) => {
      handler(
        querySnapshot.docs.map((x) => {
          return {
            createdAt: x.data().createdAt,
          }
        })
      )
    })
}

export const add = () => {
  collection
    .add({
      createdAt: firebase.firestore.Timestamp.now(),
    })
}
