import styles from './toggle_background_button.module.css'

export default function ToggleBackgroundButton({onClick}) {
  return (
    <a href='#' className={styles.button} onClick={onClick}>
      Toggle Background
    </a>
  )
}
