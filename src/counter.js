import { useState, useEffect } from 'react'
import firebase from "./firebase"

export default function Counter() {
  const [ results, setResults ] = useState([])

  useEffect(() => {
    firebase.firestore().collection("results").orderBy("created_at", "desc").onSnapshot((querySnapshot) => {
      setResults(querySnapshot.docs)
    })
  }, [])

  return (
    <div>
      { results.length }
    </div>
  )
}
