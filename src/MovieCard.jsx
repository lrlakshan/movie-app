import React from "react";

const MovieCard = ({movieObjects}) => {
  return (
    <div className="container">
      <div className="movie">
        <div>
          <p>{movieObjects.Year}</p>
        </div>
        <div>
          <img
            src={
                movieObjects.Poster !== "N/A"
                ? movieObjects.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movieObjects.Title}
          />
        </div>
        <div>
          <span>{movieObjects.Type}</span>
          <h3>{movieObjects.Title}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
