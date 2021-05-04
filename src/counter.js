import { useState, useEffect } from 'react'
import { subscribe }           from "./realtime_storage"
import Button                  from "./button"

export default function Counter() {
  const [ matchResults, setMatchResults ] = useState([])

  useEffect(() => { subscribe(setMatchResults) }, [])

  return (
    <div>
      <p>
        { matchResults.length }
      </p>
      <p>
        <Button matchResult="win"  />
        <Button matchResult="lose" />
        <Button matchResult="draw" />
      </p>
    </div>
  )
}
