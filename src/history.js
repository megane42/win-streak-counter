import styles from './history.module.css'

export default function History(props) {
  const history = []

  for (let i = 0; i < Math.min(props.matchResults.length, props.numOfHistory); i++) {
    history.push(
      <li key={`history-item-${i}`} className={styles.historyItem}>
        {props.matchResults[i].matchResult}
      </li>
    )
  }

  return (
    <ul className={styles.history}>
      {history}
    </ul>
  )
}
