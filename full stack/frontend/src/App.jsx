import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
const [jokes, setjokes] = useState([])

useEffect(()=>{
  // axios.get('http://localhost:3030/api/jokes')
     axios.get('/api/jokes')
  .then((Response)=>{
    setjokes(Response.data)
  })
  .catch((error)=>{
    console.log(error);
  })
})

  return (
    <>
      <h1>Chai or full stack</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
