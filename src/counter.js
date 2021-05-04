import { useState, useEffect } from 'react'
import firebase from "./firebase"

export default function Counter() {
  const [ results, setResults ] = useState([])

  useEffect(() => {
    firebase.firestore().collection("results").orderBy("created_at", "desc").onSnapshot((querySnapshot) => {
      setResults(querySnapshot.docs)
    })
  }, [])

  const addRecord = (result) => {
    firebase.firestore().collection("results").add({
      result: result,
      created_at: firebase.firestore.Timestamp.now(),
    })
  }

  const winHandler  = () => { addRecord("win")  }
  const loseHandler = () => { addRecord("lose") }
  const drawHandler = () => { addRecord("draw") }

  return (
    <div>
      <p>
        { results.length }
      </p>
      <p>
        <button onClick={winHandler}>win</button>
        <button onClick={loseHandler}>lose</button>
        <button onClick={drawHandler}>draw</button>
      </p>
    </div>
  )
}
