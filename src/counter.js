import { useState, useEffect } from 'react'
import firebase from "./firebase"
import Button   from "./button"

export default function Counter() {
  const [ results, setResults ] = useState([])

  useEffect(() => {
    firebase.firestore().collection("results").orderBy("created_at", "desc").onSnapshot((querySnapshot) => {
      setResults(querySnapshot.docs)
    })
  }, [])

  return (
    <div>
      <p>
        { results.length }
      </p>
      <p>
        <Button result="win"  />
        <Button result="lose" />
        <Button result="draw" />
      </p>
    </div>
  )
}
