import styles  from './win_total.module.css'
import Fade    from './fade'

const calcTotal = (matchResults) => {
  return matchResults.reduce((total, matchResult) => {
    return total + (matchResult.matchResult == 'win' ? 1 : 0 )
  }, 0)
}

export default function WinTotal({matchResults, targetTotal}) {
  return (
    <div>
      <span className={styles.winTotal}>
        <Fade>
          {calcTotal(matchResults)}
        </Fade>
      </span>
      <span>
        / {targetTotal} TOTAL WIN
      </span>
    </div>
  )
}
