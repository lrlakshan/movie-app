import React, {useEffect} from "react";
import "./App.css";
import searchIcon from "./search.svg"

const API_URL = "http://www.omdbapi.com/?apikey=c1aa3a51";

const movieObject = {
  "Title": "The Batman",
  "Year": "2022",
  "imdbID": "tt1877830",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) => {

        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies("Batman");
    }, [])
    return (
        <div className="app">
          <h1>Laki Boy Movies</h1>
          <div className="search">
            <input
              placeholder="Search for movies" 
            />
            <img
              src={searchIcon}
              alt="search"
            />
          </div>
          <div className="container">
            <div className="movie">
              <div>
                <p>{movieObject.Year}</p>
              </div>
              <div>
                <img
                  src = {(movieObject.Poster) !== "N/A" ? movieObject.Poster : "https://via.placeholder.com/400"}
                  alt = {movieObject.Title} 
                />
              </div>
              <div>
                <span>{movieObject.Type}</span>
                <h3>{movieObject.Title}</h3>
              </div>
            </div>
          </div>
        </div>
    );
}
export default App;