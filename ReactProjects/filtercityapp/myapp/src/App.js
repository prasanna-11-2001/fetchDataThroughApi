import React, { useState } from 'react'
import './App.css'
import Data from './CityNames.json'

const App = () => {
  const [search, setSearch] = useState("")
  const filtered = Data.filter((val) => val.city.toLowerCase().includes(search.toLowerCase()))
  const changeHandler = (e) => {
    setSearch(e.target.value)

  }
  return (
    <div className='city-container'>
      <h1>City's From AndraPradesh</h1>
      <input
        type='text'
        name='search'
        value={search}
        placeholder='Enter Your City'
        onChange={changeHandler}
        autoComplete='off'
        style={{
          '::placeholder': { color: 'red' }
        }}
      />

      {filtered.map((val) => <div className='city-name' key={val.id}>{val.city}</div>)}

    </div>
  )
}

export default App
// const App = () => {
//   console.log(Data)
//   const [search, setSearch] = useState("");
//   const changeHandler = (e) => {
//     setSearch(e.target.value);
//     console.log(search);
//   }
//   let usernames = ['abhi', 'basha', 'chandu', 'dhoni', 'esha', 'florence', 'ghandi', 'hari', 'iliyana', 'jhon', 'kholi', 'laxman', 'mohan',
//     'nani', 'olivia', 'prasanna', 'qutar', 'rani', 'sathaya', 'teja', 'umesh', 'vasu', 'yesob'];
//   const filtered = usernames.filter((uname) => uname.includes(search))
//   return (
//     <div className='city-container'>
//       <h1>hello world!</h1>
//       <input type='text' value={search} name='serach' onChange={changeHandler} />
//       {filtered.map((val, index) => <div key={index}>{val}</div>)}
//     </div>
//   )
// }




