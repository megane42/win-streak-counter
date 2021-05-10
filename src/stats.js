import styles from './stats.module.css'

const numOfWin = (matchResults) => {
  return matchResults.reduce((num, x) => {
    return x.matchResult === 'win' ? num + 1 : num
  }, 0)
}

const numOfLose = (matchResults) => {
  return matchResults.reduce((num, x) => {
    return x.matchResult === 'lose' ? num + 1 : num
  }, 0)
}

const numOfDraw = (matchResults) => {
  return matchResults.reduce((num, x) => {
    return x.matchResult === 'draw' ? num + 1 : num
  }, 0)
}

export default function Stats({matchResults}) {
  return (
    <div>
      (
      <span className={styles.win}>
        {numOfWin(matchResults)}
      </span>
      -
      <span className={styles.lose}>
        {numOfLose(matchResults)}
      </span>
      -
      <span className={styles.draw}>
        {numOfDraw(matchResults)}
      </span>
      )
    </div>
  )
}
