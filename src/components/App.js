import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Blog from "./Blog";
import Home from "./Home";
import Meaning from "./Meaning";
import Mayweather from "./Mayweather";
import Establishment from "./Establishment";
import Projects from "./Projects";
import Contact from "./Contact";
import "./App.css";

const App = () => {
  document.title = "About";

  return (
    <div>
      <div className="title2">
        <a
          className="linky2"
          target="_blank"
          rel="noopener noreferrer"
          href="/"
        >
          Dan Roche
        </a>
      </div>

      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/meaning" component={Meaning} />
          <Route path="/mayweather" component={Mayweather} />
          <Route path="/establishment" component={Establishment} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <div className="footer"></div>
      </Router>
    </div>
  );
};

export default App;
