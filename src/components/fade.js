import { useState, useEffect } from 'react'
import { onlyText }            from 'react-children-utilities'
import styles                  from './fade.module.css'

export default function Fade({children}) {
  const [triggered, setTriggered] = useState(false)

  useEffect(
    () => {
      setTriggered(false)
      setTimeout((() => {setTriggered(true)}), 300) // change state -> wait a bit -> change state (how terrible...)
    },
    [onlyText(children)]
  )

  return (
    <span className={triggered ? styles.afterTrigger : styles.beforeTrigger}>
      {children}
    </span>
  )
}
