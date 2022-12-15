import './App.css';
import Movie from './components/Movie';
import { useState, useEffect } from 'react';

const movieApi = `https://imdb-api.com/en/API/SearchMovie/k_zi64id52/inception 2010`; 

function App() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(movieApi)
    .then(res => res.json())
    .then(res => setMovie(res.results));
  }, []);

  return (
    <>
      <header>
        <input type="text" placeholder="Search..."/>
      </header>
      <div className='movies'>
        {movie.map((elem) => <Movie key={elem.id} {...elem}/>)}
      </div>
    </>
  );
}

export default App;