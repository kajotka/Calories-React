import React, { useState } from "react";
import Macronutrients from "./Interface/Macronutrients";
import DishItem from "./Components/DishItem";
import PersonForm from "./Components/PersonForm";
import FoodItem from "./Interface/FoodItem";
import FoodResult from "./Interface/FoodResult";
import SearchBar from "./Components/SearchBar";
import './app.scss';
import PersonFormInterface from "./Interface/PersonFormInterface";
import calculatePPM from "./Helpers/CalculatePPM";
import DishesTable from "./Components/DishesTable";
import EatProgress from "./Components/EatProgress";
import DishesList from "./Components/DishesList";

interface PPM {
    ppm: number;
}

const API_URL = "https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id=07d50733&app_key=80fcb49b500737827a9a23f7049653b9";

const App = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [ppmValues, setPpmValues] = useState<PPM>({ ppm: 0 });
    const [dishes, setDishes] = useState<FoodItem[]>([]);
    const [eatenDishes, setEatenDishes] = useState<FoodItem[]>([]);
    const [macroValues, setMacroValues] = useState<Macronutrients>({ ppm: 0, carbs: 0, fat: 0, protein: 0 });
    const [eatenMacros, setEatenMacros] = useState<Macronutrients>({ ppm: 0, carbs: 0, fat: 0, protein: 0 });
    const [personFormSubmitted, setPersonFormSubmitted] = useState<boolean>(false);

    const searchFood = async (title: string) => {
        const response = await fetch(`${API_URL}&ingr=${title}`);
        const data: FoodResult = await response.json();
        setDishes(data.hints);
    };

    function addEatenDish(dish: FoodItem) {
        setEatenDishes((prevState) => [...prevState, dish]);
        setEatenMacros((prevState) => ({
            ppm: prevState.ppm + dish.food.nutrients.ENERC_KCAL,
            carbs: prevState.carbs + dish.food.nutrients.CHOCDF,
            fat: prevState.fat + dish.food.nutrients.FAT,
            protein: prevState.protein + dish.food.nutrients.PROCNT,
        }));
    }

    // TODO: użyć tego
    function removeEatenDish(dish: FoodItem) {
        setEatenDishes((prevState) => prevState.filter((item) => item.food.foodId !== dish.food.foodId));
        setEatenMacros((prevState) => ({
            ppm: prevState.ppm - dish.food.nutrients.ENERC_KCAL,
            carbs: prevState.carbs - dish.food.nutrients.CHOCDF,
            fat: prevState.fat - dish.food.nutrients.FAT,
            protein: prevState.protein - dish.food.nutrients.PROCNT,
        }));
    }


    return (
        <div className="app">
            <h1>Licznik Kalorii</h1>
            <PersonForm
                handleSubmit={(values: PersonFormInterface) => {
                    const { height, weight, age, gender } = values;
                    const ppm = calculatePPM(height, weight, age, gender);
                    setPpmValues({ ppm: ppm });
                    setMacroValues({ ppm: ppm, carbs: (ppm * 0.6) / 4, fat: (ppm * 0.25) / 9, protein: (ppm * 0.15) / 4 });
                    document.getElementById("person-form")?.classList.add("hidden");
                    setPersonFormSubmitted(true);
                }}
            />
            {personFormSubmitted ? (
                <div style={{width: "100%"}}>
                    <EatProgress eatenMacros={eatenMacros} macroValues={macroValues} />
                    {eatenDishes.length > 0 ? (
                    <DishesTable dishes={eatenDishes} />
                    ) : null}
                    <SearchBar onChange={(e) => setSearchTerm(e.target.value)} onSearch={searchFood} searchTerm={searchTerm} />
                    <DishesList onAdd={addEatenDish} dishes={dishes} />
                </div>
            ) : null}
        </div>

    );
};

export default App;