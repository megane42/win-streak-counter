import Fade   from './fade'
import styles from './history.module.css'

const calcHistory = (matchResults, numOfHistory) => {
  let history = []

  for (let i = 0; i < Math.min(matchResults.length, numOfHistory); i++) {
    switch (matchResults[i].matchResult) {
      case 'win':
        history.push(
          <li key={`history-item-${i}`} className={styles.historyItem}>
            <span className={styles.win}>
              WIN
            </span>
          </li>
        )
        break
      case 'lose':
        history.push(
          <li key={`history-item-${i}`} className={styles.historyItem}>
            <span className={styles.lose}>
              LOSE
            </span>
          </li>
        )
        break
      case 'draw':
        history.push(
          <li key={`history-item-${i}`} className={styles.historyItem}>
            <span className={styles.draw}>
              DRAW
            </span>
          </li>
        )
        break
      default:
    }
  }

  return history
}

export default function History({matchResults, numOfHistory}) {
  return (
    <Fade>
      <ul className={styles.history}>
        {calcHistory(matchResults, numOfHistory)}
      </ul>
    </Fade>
  )
}
