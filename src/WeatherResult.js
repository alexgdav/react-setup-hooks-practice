import React from 'react'

const WeatherResult = props => {
  // console.log('props.props is', props.props)
  let weatherJSX
  props = props.props
  if (props) {
    const temperature = Math.floor((((props.main.temp - 273.15) * 1.8) + 32))
    weatherJSX = (
      <div className="weather-result col-sm-11">
        <p>Location:<span> {props.name}, {props.sys.country}</span></p>
        <hr />
        <p>Temperature: <span>{temperature}° </span></p>
        <hr />
        <p>Humidity: <span> {props.main.humidity} % </span></p>
        <hr />
        <p>Conditions: <span> {props.weather[0].main}</span></p>
        <hr />
      </div>
    )
  } else {
    weatherJSX = (
      <div className="weather-result col-sm-11">
        <p>Location: </p>
        <hr />
        <p>Temperature:</p>
        <hr />
        <p>Humidity:</p>
        <hr />
        <p>Conditions:</p>
        <hr />
      </div>
    )
  }
  return (
    <div className="col-sm-11">{weatherJSX}</div>

  )
}

export default WeatherResult
