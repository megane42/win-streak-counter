import { add } from "./realtime_storage"

export default function Button(props) {
  const matchResult = props.matchResult
  return (
    <button onClick={() => { add(matchResult) }}>
      {matchResult}
    </button>
  )
}
