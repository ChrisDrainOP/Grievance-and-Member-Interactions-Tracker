import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import NavLogoContainer from "../components/NavigationLogoContainer";
import LogOnForm from "../components/LogOnForm";

function App({ history, ...props }) {
  //Handle User login
  const [formValues, setFormValues] = useState({});
  const [resJson, setResJson] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { emailLogIn, passwordLogIn } = formValues;

    if (!emailLogIn || !passwordLogIn) {
      return setResJson((prev) => ({
        ...prev,
        ["errors"]: "Please fill out both fields to login",
      }));
    }

    const res = await fetch("/users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emailLogIn, passwordLogIn }),
    });
    const json = await res.json();

    setResJson(json);

    if (json.accessToken) {
      history.push("/home");
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [id]: value }));
  };
  useEffect(() => {
    if (!resJson.accessToken) {
      handleUserAuthorization();
    }
  }, []);

  const handleUserAuthorization = async () => {
    const response = await fetch("/home/token", {
      method: "GET",
      "Content-Type": "application.json",
      credentials: "same-origin",
      "X-Content-Type-Options": "nosniff",
    });

    const json = await response.json();

    console.log(
      "heres you data inside of useeffect handleAuthorization ",
      json
    );
    setResJson(json);

    if (json.accessToken) {
      console.log("I'm checking /app for resjso", resJson,"Then=.>>", json);
      history.push("/home");
    }
  };
  return (
    <div className='font-source-serif h-screen'>
      <NavLogoContainer />
      <div>
        <Switch>
          <Route exact path='/'>
            <LogOnForm
              history={history}
              resJson={resJson}
              sendParentJson={setResJson}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </Route>
          <PrivateRoute resJson={resJson} path='/home'>
            <HomePage history={history} />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = rest.resJson;
  console.log(auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.accessToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
