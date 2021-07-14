import { Link } from "react-router-dom";
import styles   from './home_page.module.css'

export default function HomePage() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/win_streak" className={styles.link}>WinStreak</Link>
        </li>
        <li>
          <Link to="/potg" className={styles.link}>POTG</Link>
        </li>
      </ul>
    </nav>
  )
}
