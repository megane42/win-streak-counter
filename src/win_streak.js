// import styles  from './win_streak.module.css'

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
      {calcStreak(matchResults)} / 5 WIN STREAK
    </div>
  )
}
