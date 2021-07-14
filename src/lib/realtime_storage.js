import firebase from './firebase'

const collection = firebase.firestore().collection('matchResults')

export const subscribe = (handler) => {
  collection
    .orderBy('createdAt', 'desc')
    .onSnapshot((querySnapshot) => {
      handler(
        querySnapshot.docs.map((x) => {
          return {
            matchResult: x.data().matchResult,
            createdAt:   x.data().createdAt,
          }
        })
      )
    })
}

export const addMatchResult = (matchResult) => {
  collection
    .add({
      matchResult: matchResult,
      createdAt: firebase.firestore.Timestamp.now(),
    })
}
