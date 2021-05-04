import { add } from "./realtime_storage"

export default function Button(props) {
  return (
    <button onClick={() => { add(props.result) }} value={props.result}>
      {props.result}
    </button>
  )
}
