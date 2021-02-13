import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavLogoContainer from "../components/NavigationLogoContainer";
import LogOnForm from "../components/LogOnForm";

function App() {
  return (
    <Router>
      <div className='font-source-serif h-screen'>
        <NavLogoContainer />
        <div>
          <Switch>
            <Route exact path='/'>
              <LogOnForm />
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
