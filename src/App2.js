import React from 'react'
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Joke from './components/Joke'

const App2 = () => {

    const [jokes, setJokes] = useState([]);

    useEffect(()=>{

        axios.get('https://api.icndb.com/jokes')
            .then(response => {

                setJokes(response.data.value);
            })

    },[])


  return (
    <div>
        <h1>Összes Chuck Norris Vicc</h1>

        {

            jokes.map(joke => {

                return <Joke key={joke.id} joke={joke.joke} />
            })
        }
    </div>
  )
}

export default App2