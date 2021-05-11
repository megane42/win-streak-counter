import styles  from './win_streak.module.css'
import Fade    from './fade'

const calcStreak = (matchResults) => {
  let streak = 0
  for (let i = 0; i < matchResults.length; i++) {
    if (matchResults[i].matchResult !== 'win') {
      break
    }
    streak++
  }
  return streak
}

export default function WinStreak({matchResults}) {
  return (
    <div>
      <span className={styles.winStreak}>
        <Fade>
          {calcStreak(matchResults)}
        </Fade>
      </span>
      <span>
        / 5 WIN STREAK
      </span>
    </div>
  )
}
