import './App.css'
import { useState, useEffect } from 'react';

const films = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {

  const [filteredFilm, setFilteredFilm] = useState(films)
  const [searchGenre, setSearchCategory] = useState('');

  useEffect(() => {

    let updatedFilm = films;

    if (searchGenre !== '') {
      updatedFilm = updatedFilm.filter(film => film.genre === searchGenre)
    }

    setFilteredFilm(updatedFilm);
  }, [searchGenre])

  return (
    <>
      <h1>Movie</h1>

      <hr />
      <section>
        <h2>Cerca Film</h2>
        <label>Cerca per categoria</label>
        <div>

          <select value={searchGenre} onChange={e => setSearchCategory(e.target.value)}>
            <option value="">---</option>
            <option>Fantascienza</option>
            <option>Thriller</option>
            <option>Romantico</option>
            <option>Azione</option>
          </select>

        </div>


      </section>

      <hr />

      <section>
        <ul>
          {filteredFilm.map((film, i) => <li key={i}>
            <h3>{film.title}</h3>
            <p>Categoria: {film.genre}</p>
          </li>)}
        </ul>
      </section>

    </>
  )
}

export default App
