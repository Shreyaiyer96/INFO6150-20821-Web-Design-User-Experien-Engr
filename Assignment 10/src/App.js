import './App.css';
import React from "react";
import "./App.css";
import WeatherContainer from "./weatherForecast.js";
import Hourly from "./hourlyTemp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={WeatherContainer} />
            <Route path="/hourlyForecast/:day" component={Hourly} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;