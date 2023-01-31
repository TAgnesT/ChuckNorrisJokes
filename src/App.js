import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {

  const [jokes, setJokes] = useState([]);

  const showJoke = () => {

    axios.get('https://api.chucknorris.io/jokes/random')
          .then(response => {

            setJokes(response.data.value);

          })

    let jokeContainer = document.getElementById("joke");
    jokeContainer.innerText = jokes;
  }


  return (
    <div className="App">
       <h1>Random Chuck Norris Viccek</h1>
       <button onClick={showJoke}>Vicc megjelenítése</button>


       <div>
          <blockquote id="joke"></blockquote>
       </div>
    </div>
  );
}

export default App;
