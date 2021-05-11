import Fade   from './fade'
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
      <Fade>
        <span className={styles.win}>
          {numOfWin(matchResults)}
        </span>
      </Fade>
      -
      <Fade>
        <span className={styles.lose}>
          {numOfLose(matchResults)}
        </span>
      </Fade>
      -
      <Fade>
        <span className={styles.draw}>
          {numOfDraw(matchResults)}
        </span>
      </Fade>
      )
    </div>
  )
}
