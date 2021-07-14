import styles  from './potg.module.css'
import Fade    from './fade'

const calcPotg = (potgResults) => (potgResults.length)

export default function Potg({potgResults, targetPotg}) {
  return (
    <div>
      <span className={styles.potg}>
        <Fade>
          {calcPotg(potgResults)}
        </Fade>
      </span>
      <span>
        / {targetPotg} POTG
      </span>
    </div>
  )
}
