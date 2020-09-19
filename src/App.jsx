import React from 'react';
import { AppProvider } from "./Context";
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Test from "./components/Mail/Test";
import Navigation from "./components/Navigation/Navigation";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import './App.css';

function App () 
{
  return (
    <AppProvider>
      <Navigation />
      <Main>
        <Switch>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/verify-account">
            <Test />
          </Route>
        </Switch>
      </Main>
    </AppProvider>
  );
}

export default App;
