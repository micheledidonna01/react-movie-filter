import { useState, useEffect } from "react"
import dataMovies from "./data/movies"


function App() {

  const [movies, setMovies] = useState(dataMovies);
  const [filterMovies, setFilterMovies] = useState('');
  const [titleMovies, setTitleMovies] = useState('');
  const [newMovie, setNewMovie] = useState('');

  useEffect(() => {
    console.log(filterMovies);
    let result = dataMovies;

    if (filterMovies !== "") {
      result = dataMovies.filter(movie => movie.genre.includes(filterMovies));
    }

    setMovies(result);
    console.log(result)
    result = dataMovies;
  }, [filterMovies]);

  function searchTitle(e) {
    e.preventDefault();
    console.log(titleMovies);
    let result = dataMovies;
    if (titleMovies !== "") {
      result = dataMovies.filter(movie => movie.title === titleMovies);
    }

    setMovies(result);
    setTitleMovies('');
  }

  function addMovie(e){

    e.preventDefault();

    let randomGenre = ['Fantascienza', 'Thriller', 'Romantico', 'Azione'];
    let position = Math.floor(Math.random() * (randomGenre.length));
    console.log(position);

    let film = {
      title: newMovie,
      genre: randomGenre[position]
    };

    setMovies([...movies, film]);
    setNewMovie('');
  }
  return (
    <>
      <div className="d-flex row my-4 justify-content-center">

        <h3>Seleziona il genere</h3>
        <div className="my-4">
          <select value={filterMovies} onChange={e => setFilterMovies(e.target.value)} className="form-select">
            <option value="">---</option>
            <option>Fantascienza</option>
            <option>Thriller</option>
            <option>Romantico</option>
            <option>Azione</option>
          </select>
        </div>

        <div className="container d-flex row gap-2">
          <p className="text-center d-none">Non ci sono film con questo titolo</p>
          {movies.map((movies, index) =>
            <div key={index} className="bg-success d-flex justify-content-center gap-5">
              <p><span className="fw-bold">Titolo: </span>{movies.title}</p>
              <p><span className="fw-bold">Genere: </span>{movies.genre}</p>
            </div>
          )}
        </div>

        <div className="d-flex row justify-content-evenly">
          <form onSubmit={searchTitle} className="d-flex align-items-center my-4 gap-1 col-5 border p-3">
            <div>
              <input
                type="text"
                value={titleMovies}
                onChange={(e) => setTitleMovies(e.target.value)}
                className="form-control"
                placeholder="titolo"
              />
            </div>
            <button className="btn btn-outline-success">Cerca Titolo</button>
          </form>
          <form onSubmit={addMovie} className="d-flex align-items-center my-4 gap-1 col-5 border p-3">
            <div>
              <input
                type="text"
                value={newMovie}
                onChange={(e) => setNewMovie(e.target.value)}
                className="form-control"
                placeholder="titolo Film"
              />
              {/* <input
                type="text"
                value={newMovie}
                onChange={(e) => setNewMovie(e.target.value)}
                className="form-control my-2"
                placeholder="genere Film"
              /> */}
            </div>
            <button className="btn btn-outline-success">Aggiungi Titolo</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
