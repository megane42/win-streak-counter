import styles from './stats.module.css'

export default function Stats(props) {
  const numOfWin = (matchResults) => {
    return matchResults.reduce((num, x) => {
      return x.matchResult === "win" ? num + 1 : num
    }, 0)
  }

  const numOfLose = (matchResults) => {
    return matchResults.reduce((num, x) => {
      return x.matchResult === "lose" ? num + 1 : num
    }, 0)
  }

  const numOfDraw = (matchResults) => {
    return matchResults.reduce((num, x) => {
      return x.matchResult === "draw" ? num + 1 : num
    }, 0)
  }

  return (
    <div>
      (
      <span className={styles.win}>
        {numOfWin(props.matchResults)}
      </span>
      -
      <span className={styles.lose}>
        {numOfLose(props.matchResults)}
      </span>
      -
      <span className={styles.draw}>
        {numOfDraw(props.matchResults)}
      </span>
      )
    </div>
  )
}
