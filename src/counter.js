import { useState, useEffect } from 'react'
import { subscribe }           from "./realtime_storage"
import AddButton               from "./add_button"
import WinStreak               from "./win_streak"
import Stats                   from "./stats"

export default function Counter() {
  const [ matchResults, setMatchResults ] = useState([])

  useEffect(() => { subscribe(setMatchResults) }, [])

  return (
    <div>
      <WinStreak matchResults={matchResults} />
      <Stats     matchResults={matchResults} />
      <p>
        <AddButton matchResult="win"  />
        <AddButton matchResult="lose" />
        <AddButton matchResult="draw" />
      </p>
    </div>
  )
}
