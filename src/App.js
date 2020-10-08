import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Home from "./components/Home";
import Menu from "./components/Menu";
import menuExit from "./components/images/exit.png";

function App() {
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = () => {
    setMenuState(!menuState);
    console.log("menuState:", !menuState);
  };
  return (
    <>
      <Router>
        <div className="app">
          <div
            className={menuState ? "menu__overlay active" : "menu__overlay"}
            onClick={toggleMenu}
          >
            <Menu menuState={menuState} />
            <img src={menuExit} alt="" className="menu__exit" />
          </div>
          <Header menuState={menuState} toggleMenu={toggleMenu} />
          <SubHeader />
          <Switch>
            <Route path="/login">
              <h1>login page</h1>
            </Route>
            <Route path="/checkout">
              <h1>checkout page</h1>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
