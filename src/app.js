import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage      from "./pages/home_page"
import WinStreakPage from "./pages/win_streak_page"
import WinTotalPage  from "./pages/win_total_page"
import PotgPage      from "./pages/potg_page"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/win_streak">
          <WinStreakPage />
        </Route>
        <Route path="/win_total">
          <WinTotalPage />
        </Route>
        <Route path="/potg">
          <PotgPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}
