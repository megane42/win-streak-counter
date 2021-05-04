import firebase from "./firebase"

const addRecord = (e) => {
  firebase.firestore().collection("results").add({
    result: e.target.value,
    created_at: firebase.firestore.Timestamp.now(),
  })
}

export default function Button(props) {
  return (
    <button onClick={addRecord} value={props.result}>
      {props.result}
    </button>
  )
}
