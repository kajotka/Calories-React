import React from "react";

const MovieCard = (food) => {
    return (
      <div className="movie" key={food.foodId}>
      <h1>{food.movie.food.label}</h1>
      <img src={food.movie.food.image} />
      </div>
    );
}

export default MovieCard;