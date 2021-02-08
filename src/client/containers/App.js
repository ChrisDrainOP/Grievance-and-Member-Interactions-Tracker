import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavLogoContainer from "../components/NavigationLogoContainer";
import Authentication from "./Auth";

function App() {
  return (
    <Router>
      <div className='font-source-serif h-screen'>
        <NavLogoContainer />
        <div>
          <Switch>
            <Route exact path='/'>
              <Authentication />
            </Route>
            <Route path='/home'>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
