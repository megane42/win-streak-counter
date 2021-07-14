import { add } from '../lib/potg_results_storage'
import styles  from './add_potg_result_button.module.css'

export default function AddPotgResultButton() {
  return (
    <a href='#' className={styles.button} onClick={() => { add() }}>
      POTG
    </a>
  )
}
