import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => setData(response.data))

  }, [])
  return (
    <div className='card'>
      <h1>Fetch data from API</h1>
      <ul>
        {data.map(each => (
          <li key={each.id}>{each.title}</li>
        ))}
      </ul>
    </div>

  )
}

export default App
