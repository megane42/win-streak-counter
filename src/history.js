import Win    from './win'
import Lose   from './lose'
import Draw   from './draw'
import styles from './history.module.css'

export default function History(props) {
  const history = []

  for (let i = 0; i < Math.min(props.matchResults.length, props.numOfHistory); i++) {
    switch (props.matchResults[i].matchResult) {
      case 'win':
        history.push(
          <li key={`history-item-${i}`} className={styles.historyItem}>
            <Win />
          </li>
        )
        break
      case 'lose':
        history.push(
          <li key={`history-item-${i}`} className={styles.historyItem}>
            <Lose />
          </li>
        )
        break
      case 'draw':
        history.push(
          <li key={`history-item-${i}`} className={styles.historyItem}>
            <Draw />
          </li>
        )
        break
    }
  }

  return (
    <ul className={styles.history}>
      {history}
    </ul>
  )
}
