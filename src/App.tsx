import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Clock from "./containers/Clock";
import { ROUTES } from "./utils/constants";
import "./utils/styles/custom.scss";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={ROUTES.ROOT} component={Clock} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
