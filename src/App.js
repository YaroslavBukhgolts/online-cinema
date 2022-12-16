import './App.css';
import Movie from './components/Movie';
import { useState, useEffect } from 'react';
import NotFound from './components/NotFound';

const movieApi = `https://imdb-api.com/en/API/SearchMovie/k_zi64id52/`; 
const movieTop = `https://imdb-api.com/en/API/Top250Movies/k_zi64id52/`;

function App() {
  const [movie, setMovie] = useState([]);
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const onHandleTerm = (e) => {
    setTerm(e.target.value);
  }

  useEffect(() => {
    fetch(movieTop)
    .then(res => res.json())
    .then(res => {
      setMovie(res.items)
      setLoading(false)
    });
  }, []);

  const onHandleSearch = (e) => {
    e.preventDefault(); 
    setLoading(true); 
    fetch(movieApi + term)
      .then(res => res.json())
      .then(res => {
        setMovie(res.results)
        setLoading(false)
      });
      setTerm('');
  }

  const onNotFound = () => { 
    setLoading(true);
    fetch(movieTop)
      .then(res => res.json())
      .then(res => {
        setMovie(res.items)
        setLoading(false)
      });
  }

  return (
    <>
      <header>
        <form action='submit' onSubmit={onHandleSearch}>
          <input type="text" placeholder="Search..." value={term} onChange = {onHandleTerm}/>
        </form>
      </header>
      <div className='movies'>
        {
        error ? <NotFound onNotFound={onNotFound}/> : 
        (loading ? 'loading...' : movie.map((elem) => <Movie key={elem.id} {...elem}/>))
        }
      </div>
    </>
  );
}

export default App;