import React from "react";

const MovieCard = ({ movieResult }) => {

  return (
    <div className="movie">
      <div>
        <p>{movieResult.Year}</p>
      </div>
      <div>
        <img
          src={
            movieResult.Poster !== "N/A"
              ? movieResult.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movieResult.Title}
        />
      </div>
      <div>
        <span>{movieResult.Type}</span>
        <h3>{movieResult.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
