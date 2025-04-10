import { useState, useEffect } from "react"
import dataMovies from "./data/movies"


function App() {

  const [movies, setMovies] = useState(dataMovies);
  const [filterMovies, setFilterMovies] = useState('');

  useEffect(()=>{
    console.log(filterMovies);
    let result = dataMovies;

    if(filterMovies !== ""){
      result = dataMovies.filter(movie => movie.genre.includes(filterMovies));
    }
    
    setMovies(result);
    console.log(result)
    result = dataMovies;
  }, [filterMovies]);


  return (
    <>
      <div className="d-flex row my-4 justify-content-center">

        <h3>Seleziona il genere</h3>
        <div className="my-4">
          <select value={filterMovies} onChange={e => setFilterMovies(e.target.value)}>
            <option value="">---</option>
            <option>Fantascienza</option>
            <option>Thriller</option>
            <option>Romantico</option>
            <option>Azione</option>
          </select>
        </div>

        <div className="container d-flex row gap-2">
          {movies.map((movies, index) =>
            <div key={index} className="bg-success d-flex justify-content-center gap-5">
              <p><span className="fw-bold">Titolo: </span>{movies.title}</p>
              <p><span className="fw-bold">Genere: </span>{movies.genre}</p>
            </div>
          )}
        </div>

      </div>
    </>
  )
}

export default App
