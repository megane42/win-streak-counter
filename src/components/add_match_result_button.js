import { addMatchResult } from '../lib/realtime_storage'
import styles             from './add_match_result_button.module.css'

export default function AddMatchResultButton({matchResult}) {
  return (
    <a href='#' className={styles.button} onClick={() => { addMatchResult(matchResult) }}>
      {matchResult}
    </a>
  )
}
