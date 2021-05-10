import styles from './stats.module.css'

export default function Stats({matchResults}) {
  const numOfWin = (results) => {
    return results.reduce((num, x) => {
      return x.matchResult === "win" ? num + 1 : num
    }, 0)
  }

  const numOfLose = (results) => {
    return results.reduce((num, x) => {
      return x.matchResult === "lose" ? num + 1 : num
    }, 0)
  }

  const numOfDraw = (results) => {
    return results.reduce((num, x) => {
      return x.matchResult === "draw" ? num + 1 : num
    }, 0)
  }

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
