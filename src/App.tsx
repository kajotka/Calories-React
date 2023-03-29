import React, {useState} from "react";
import PersonForm from "./Components/PersonForm";
import DishItem from "./Components/DishItem";
import FoodItem from "./Interface/FoodItem";
import FoodResult from "./Interface/FoodResult";
import SearchBar from "./Components/SearchBar";
import CalorieCounter from "./Components/CaloriesCounter";
import './app.scss';
import PersonFormInterface from "./Interface/PersonFormInterface";

interface Macronutrients {
    carbs: number;
    fat: number;
    protein: number;
}

interface PPM {
    ppm: number;
}

const API_URL = "https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id=07d50733&app_key=80fcb49b500737827a9a23f7049653b9";

const App = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [dishes, setDishes] = useState<FoodItem[]>([]);
    const [ppmValues, setPpmValues] = useState<PPM>({ ppm: 0 });
    const [macroValues, setMacroValues] = useState<Macronutrients>({ carbs: 0, fat: 0, protein: 0 });

    const searchFood = async (title: string) => {
        const response = await fetch(`${API_URL}&ingr=${title}`);
        const data: FoodResult = await response.json();
        setDishes(data.hints);
    };

    return (
        <div className="app">
            <h1>Licznik Kalorii</h1>
            <PersonForm
                handleSubmit={(values: PersonFormInterface) => {
                    const { height, weight, age, gender } = values;
                    const ppm = calculatePPM(height, weight, age, gender);
                    console.log(height, weight, age, gender);
                    setPpmValues({ ppm: ppm });
                    setMacroValues({ carbs: (ppm * 0.6) / 4, fat: (ppm * 0.25) / 9, protein: (ppm * 0.15) / 4 });
                }}
                ppm={ppmValues.ppm}
            />
            <SearchBar onChange={(e) => setSearchTerm(e.target.value)} onSearch={searchFood} searchTerm={searchTerm}/>

            {dishes.length > 0 ? (
                <div className="container">
                    {dishes.map((food) => (
                        <DishItem food={food.food} key={food.food.foodId + Math.floor(Math.random() * 1000)}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No dishes found</h2>
                </div>
            )}
            <CalorieCounter ppm={ppmValues.ppm} carbs={macroValues.carbs} fat={macroValues.fat} protein={macroValues.protein} />
        </div>
    );
};

function calculatePPM(height: number, weight: number, age: number, gender: string) {
    let ppm = 0;
    if (gender === "male") {
        ppm = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
        ppm = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return ppm;
}

export default App;
