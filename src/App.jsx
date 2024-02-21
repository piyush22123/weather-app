import React from 'react'
import './App.css'

function App() {
  

  return (
    <>
    <h1>weather App</h1>
      <div className="main">
        <label for = "cityInput">City Name:</label>
        <input id='cityInput' type="text" name='cityName'/>
      </div>
    </>
  )
}

export default App
