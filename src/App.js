import React, { Component } from 'react';
import './App.scss';
import './Weather.scss';
import TimeDate from "./components/TimeDate";
import Weather from "./components/Weather";
import Calendar from "./components/Calendar";
import ToDoList from "./components/ToDoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <TimeDate></TimeDate>
          <Weather></Weather>
          <Calendar></Calendar>
          <ToDoList></ToDoList>
        </div>
        <script src="https://apis.google.com/js/platform.js"></script>
      </div>
    );
  }
}

export default App;
