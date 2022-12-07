import './App.css';
import Movie from './components/Movie';
import { useState, useEffect } from 'react';

const movieApi = `https://imdb-api.com/en/API/SearchMovie/k_zi64id52/`; 

function App() {
  const movies = [1, 2, 3];
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(movieApi)
    .then(res => res.json())
  }, []);

  return (
    <div className="movies">
      <header>
        <input type="text" placeholder="Search..."/>
      </header>
      <div className='movie'>
        {movies.map((e, i) => <Movie key={i}/>)}
      </div>
    </div>
  );
}

export default App;