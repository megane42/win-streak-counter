import { add } from '../lib/realtime_storage'
import styles  from './add_button.module.css'

export default function AddButton({matchResult}) {
  return (
    <a href='#' className={styles.button} onClick={() => { add(matchResult) }}>
      {matchResult}
    </a>
  )
}
