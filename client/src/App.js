import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./containers/HomePage";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/cart'>
            <h1>CArt</h1>
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
