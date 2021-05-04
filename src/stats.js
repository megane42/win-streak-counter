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
      <div>win: {numOfWin(props.matchResults)}</div>
      <div>lose: {numOfLose(props.matchResults)}</div>
      <div>draw: {numOfDraw(props.matchResults)}</div>
    </div>
  )
}
