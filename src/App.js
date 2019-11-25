import React, { useState } from 'react'
import './style.scss'
import Form from './Form.js'
import axios from 'axios'
import apiUrl from './apiConfig.js'
import WeatherResult from './WeatherResult'

const App = props => {
  const [weather, setWeather] = useState(null)
  const [searchParams, setSearchParams] = useState({ city: '', country: '' })

  const handleChange = event => {
    event.persist()
    setSearchParams(searchParams => ({
      ...searchParams, [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios(`${apiUrl}?q=${searchParams.city},${searchParams.country}&APPID=278b204052da82f8d962cab5fd1a2a01`)
      .then(res => {
        setWeather(res.data)
        // console.log('resdata is ', res.data)
      })
      .catch(console.error)
  }

  return (
    <div className="container-fluid">
      <div className='main'>
        <aside className="aside">
        </aside>
        <div className="splitpane-right row">
          <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            searchCity={searchParams.city}
            searchCountry={searchParams.country}
          />
          <div className="col-sm-11">
            <WeatherResult props={weather}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
