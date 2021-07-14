import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import WinStreakPage from "./pages/win_streak_page"
import PotgPage      from "./pages/potg_page"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/win_streak">
          <WinStreakPage />
        </Route>
        <Route path="/potg">
          <PotgPage />
        </Route>
      </Switch>
    </Router>
  )
}
