export default function History(props) {
  const history = []

  for (let i = 0; i < Math.min(props.matchResults.length, props.numOfHistory); i++) {
    history.push(<li key={i}>{props.matchResults[i].matchResult}</li>)
  }

  return (
    <ul>
      {history}
    </ul>
  )
}
