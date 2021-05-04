import { useState, useEffect } from 'react'
import { subscribe }           from "./realtime_storage"
import Button                  from "./button"

export default function Counter() {
  const [ results, setResults ] = useState([])

  useEffect(() => { subscribe(setResults) }, [])

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
