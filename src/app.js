import { useState, useEffect } from 'react'
import { subscribe }           from './lib/realtime_storage'
import AddButton               from './add_button'
import WinStreak               from './win_streak'
import History                 from './history'
import Stats                   from './stats'
import styles                  from './app.module.css'

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
        </div>

        <div className={`${styles.row} ${styles.historyAndStats}`}>
          <div className={styles.stats}>
            <Stats matchResults={matchResults} />
          </div>
          <div className={styles.history}>
            <History matchResults={matchResults} numOfHistory={10} />
          </div>
        </div>
      </div>
      <div>
        <span className={styles.addButton}>
          <AddButton matchResult='win' />
        </span>
        <span className={styles.addButton}>
          <AddButton matchResult='lose' />
        </span>
        <span className={styles.addButton}>
          <AddButton matchResult='draw' />
        </span>
      </div>
    </div>
  )
}
