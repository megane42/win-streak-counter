import { add } from "./lib/realtime_storage"

export default function AddButton(props) {
  const matchResult = props.matchResult
  return (
    <button onClick={() => { add(matchResult) }}>
      {matchResult}
    </button>
  )
}
