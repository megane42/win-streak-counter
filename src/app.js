import { useState, useEffect } from 'react'
import { subscribe }           from "./realtime_storage"
import AddButton               from "./add_button"
import WinStreak               from "./win_streak"
import History                 from "./history"
import Stats                   from "./stats"
import styles                  from "./app.module.css"

export default function App() {
  const [ matchResults, setMatchResults ] = useState([])

  useEffect(() => { subscribe(setMatchResults) }, [])

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.row}>
          <div className={styles.winStreak}>
            <WinStreak matchResults={matchResults} />
          </div>
          <div className={styles.stats}>
            <Stats matchResults={matchResults} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.stats}>
            <History matchResults={matchResults} numOfHistory={5} />
          </div>
        </div>
      </div>
      <div className={styles.controlPanel}>
        <AddButton matchResult="win"  />
        <AddButton matchResult="lose" />
        <AddButton matchResult="draw" />
      </div>
    </div>
  )
}
