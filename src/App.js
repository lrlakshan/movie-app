import React, { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=c1aa3a51";

const App = () => {

  const [movieResults, setMovieResults] = useState([]);
  const [searchKeyWord, setSearchKeyWord] = useState('');

  // Function to get the movies from the API
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovieResults(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>Laki Boy Movies</h1>
      <div className="search">
        <input 
          placeholder="Search for movies"
          value = {searchKeyWord}
          onChange = {(e) => setSearchKeyWord(e.target.value)}
        />
        <img 
          src={searchIcon} 
          alt="search" 
          onClick={() => searchMovies(searchKeyWord)}
        />
      </div>
      {
        movieResults.length > 0 ? (
          <div className="container">
            {
              React.Children.toArray(
                movieResults.map((movieResult) => (
                  <MovieCard movieResult = {movieResult}/>
                ))
              )}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
};
export default App;
