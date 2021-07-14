import { useState, useEffect } from 'react'
import queryString             from 'query-string'

import { subscribe }           from '../lib/realtime_storage'
import AddButton               from '../components/add_button'
import ToggleBackgroundButton  from '../components/toggle_background_button'
import History                 from '../components/history'
import Stats                   from '../components/stats'
import styles                  from './potg_page.module.css'

export default function PotgPage() {
  const [ matchResults, setMatchResults ] = useState([])

  useEffect(() => { subscribe(setMatchResults) }, [])

  const [ backgroundTransparent, setBackgroundTransparent ] = useState(true)

  const targetStreak = queryString.parse(window.location.search).target || 3

  return (
    <div className={backgroundTransparent ? styles.backgroundTransparent : styles.backgroundOpaque }>
      <div className={styles.main}>
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
