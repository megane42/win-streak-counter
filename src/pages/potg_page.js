import { useState, useEffect } from 'react'
import queryString             from 'query-string'

import { subscribe as subscribeMatchResult } from '../lib/match_results_storage'
import { subscribe as subscribePotgResult }  from '../lib/potg_results_storage'
import AddMatchResultButton                  from '../components/add_match_result_button'
import AddPotgResultButton                   from '../components/add_potg_result_button'
import ToggleBackgroundButton                from '../components/toggle_background_button'
import Potg                                  from '../components/potg'
import History                               from '../components/history'
import Stats                                 from '../components/stats'
import styles                                from './potg_page.module.css'

export default function PotgPage() {
  const [ matchResults, setMatchResults ] = useState([])
  const [ potgResults, setPotgResults ] = useState([])

  useEffect(() => { subscribeMatchResult(setMatchResults) }, [])
  useEffect(() => { subscribePotgResult(setPotgResults) }, [])

  const [ backgroundTransparent, setBackgroundTransparent ] = useState(true)

  const targetPotg = queryString.parse(window.location.search).target || 3

  return (
    <div className={backgroundTransparent ? styles.backgroundTransparent : styles.backgroundOpaque }>
      <div className={styles.main}>
        <div className={styles.row}>
          <div className={styles.winStreak}>
            <Potg potgResults={potgResults} targetPotg={targetPotg}/>
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
          <AddMatchResultButton matchResult='win' />
        </span>
        <span className={styles.addButton}>
          <AddMatchResultButton matchResult='lose' />
        </span>
        <span className={styles.addButton}>
          <AddPotgResultButton />
        </span>
        <span className={styles.addButton}>
          <ToggleBackgroundButton onClick={ () => { setBackgroundTransparent(!backgroundTransparent) } } />
        </span>
      </div>
    </div>
  )
}
