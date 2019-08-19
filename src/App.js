import React, { Component } from 'react';
import './App.scss';
import TimeDate from "./components/TimeDate";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <TimeDate></TimeDate>
          <div className='weather section'>
            <h2>Weather</h2>
          </div>
          <h2 className='header'>Today</h2>
          <div className='today section'>
          </div>
          <h2 className='header'>Tomorrow</h2>
          <div className='tomorrow section'>
          </div>
          <h2 className='header'>To-Do</h2>
          <div className='to-do section'>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
