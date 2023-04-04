import DishItem from "./DishItem";
import FoodItem from "../Interface/FoodItem";
import "./DishesList.scss"

interface DishesListProps {
    dishes: FoodItem[];
    onAdd: (food: FoodItem) => void;
}

const DishesList = ({ dishes, onAdd }: DishesListProps) => {
    return (
        <div>
            {dishes.length > 0 ? (
                <div className="container search-container">
                    {dishes.map((food) => (
                        <DishItem onAdd={onAdd} food={food} key={food.food.foodId + Math.floor(Math.random() * 1000)} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>Brak wyników</h2>
                </div>
            )}
        </div>
    );
};

export default DishesList;
