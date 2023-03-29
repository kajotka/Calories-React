import React, { useState, useEffect } from "react";

function Form({ handleSubmit, ppm }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(height, weight, age, gender);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Wzrost:
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Waga:
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Wiek:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />
      <label>
        Płeć:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Wybierz</option>
          <option value="male">Mężczyzna</option>
          <option value="female">Kobieta</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
