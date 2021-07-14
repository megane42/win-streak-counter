import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import WinStreakPage from "./pages/win_streak_page"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <WinStreakPage />
        </Route>
      </Switch>
    </Router>
  )
}
