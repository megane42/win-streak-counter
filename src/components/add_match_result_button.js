import { add } from '../lib/match_results_storage'
import styles  from './add_match_result_button.module.css'

export default function AddMatchResultButton({matchResult}) {
  return (
    <a href='#' className={styles.button} onClick={() => { add(matchResult) }}>
      {matchResult}
    </a>
  )
}
