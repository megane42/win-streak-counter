import { useState, useEffect } from 'react'
import { subscribe }           from './lib/realtime_storage'
import AddButton               from './add_button'
import ToggleBackgroundButton  from './toggle_background_button'
import WinStreak               from './win_streak'
import History                 from './history'
import Stats                   from './stats'
import styles                  from './app.module.css'

export default function App() {
  const [ matchResults, setMatchResults ] = useState([])

  useEffect(() => { subscribe(setMatchResults) }, [])

  const [ backgroundTransparent, setBackgroundTransparent ] = useState(true)

  return (
    <div className={backgroundTransparent ? styles.backgroundTransparent : styles.backgroundOpaque }>
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
        <span className={styles.addButton}>
          <ToggleBackgroundButton onClick={ () => { setBackgroundTransparent(!backgroundTransparent) } } />
        </span>
      </div>
    </div>
  )
}
