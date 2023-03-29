import React, { useState, useEffect } from "react";
import Form from "./Form";
import Food from "./Food";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id=07d50733&app_key=80fcb49b500737827a9a23f7049653b9";
// &ingr=coffee+and+croissant

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [ppm, setPpm] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fat, setFat] = useState(0);
  const [protein, setProtein] = useState(0);

  // useEffect(() => {
  // }, []);

  const searchFood = async (title) => {
    const response = await fetch(`${API_URL}&ingr=${title}`);
    const data = await response.json();
console.log(data);
    setMovies(data.hints);
  };

  return (
    <div className="app">
      <h1>Licznik Kalorii</h1>
      <Form
        handleSubmit={(height, weight, age, gender) => {
          const ppm = calculatePPM(height, weight, age, gender);
          setPpm(ppm);
          setCarbs((ppm * 0.6) / 4);
          setFat((ppm * 0.25) / 9);
          setProtein((ppm * 0.15) / 4);
          console.log(ppm);
        }}
        ppm={ppm}
      />
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchFood(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((food) => (
            <Food food={food} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      {ppm ? ppm : 0} <br></br>
      {fat ? fat : 0} <br></br>
      {carbs ? carbs : 0} <br></br>
      {protein ? protein : 0} 
    </div>
  );
};

function calculatePPM(height, weight, age, gender) {
  let ppm = 0;
  if (gender === "male") {
    ppm = 10 * weight + 6.25 * height - 5 * age + 5;
  } else if (gender === "female") {
    ppm = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  return ppm;
}

export default App;
