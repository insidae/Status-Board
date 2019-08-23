import React, {Component} from 'react'

class WeatherContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        weather: [],
        kelvin: []
      };
    }
  
    componentDidMount() {
      fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f69ccbe97553f572853f77c58e164c56")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              weather: result.weather,
              kelvin: result.main
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, weather, kelvin } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        // Formula for converting Kelvin to Celsius is ... °C = K - 273.15
        return (
          <div className='weather section'>
            <ul className='weather-details'>
            {weather.map(item => (
                <li key={item.id} className="weather-icon">
                  <div className={"icon-" + item.id}></div>
                </li>
            ))}
              <li key={kelvin.temp} className="weather-temperature">
                <h2>{(kelvin.temp - 273.15).toFixed(0)} &#176;</h2>
              </li>
              {weather.map(item => (
                  <li key={item.main} className="weather-description">
                    <h2>{item.main}</h2>
                  </li>
              ))}
            </ul>
          </div>
        );
      }
    }
  }
  export default WeatherContainer