import DishItem from "./DishItem";
import FoodItem from "../Interface/FoodItem";
import {Box} from "@mui/material";

interface DishesListProps {
    dishes: FoodItem[];
}

const DishesList = ({dishes}: DishesListProps) => {
    return (
        <div className="container">
            <Box sx={{width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper'}}>
                {dishes.map((food) => (
                    <DishItem
                        onAdd={() => {}}
                        food={food}
                        key={food.food.foodId + Math.floor(Math.random() * 1000)}
                    />
                ))}
            </Box>
        </div>
    );
};

export default DishesList;