import { useState, useEffect } from 'react'
import styles                  from './fade.module.css'

export default function Fade({children}) {
  const [triggered, setTriggered] = useState(false)

  useEffect(
    () => {
      setTriggered(false)
      setTimeout((() => {setTriggered(true)}), 300)
    },
    [children]
  )

  return (
    <span className={triggered ? styles.afterTrigger : styles.beforeTrigger}>
      {children}
    </span>
  )
}
