import { useState, useEffect } from 'react'
import { subscribe }           from "./realtime_storage"
import AddButton               from "./add_button"
import WinStreak               from "./win_streak"
import History                 from "./history"
import Stats                   from "./stats"

export default function App() {
  const [ matchResults, setMatchResults ] = useState([])

  useEffect(() => { subscribe(setMatchResults) }, [])

  return (
    <div>
      <Stats     matchResults={matchResults} />
      <History   matchResults={matchResults} numOfHistory={5} />
      <WinStreak matchResults={matchResults} />
      <p>
        <AddButton matchResult="win"  />
        <AddButton matchResult="lose" />
        <AddButton matchResult="draw" />
      </p>
    </div>
  )
}
