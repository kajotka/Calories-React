interface CalorieCounterProps {
    ppm: number;
    carbs: number;
    fat: number;
    protein: number;
}

const CalorieCounter = ({ ppm, carbs, fat, protein }: CalorieCounterProps) => (
    <>
        {ppm} <br />
        {fat} <br />
        {carbs} <br />
        {protein}
    </>
);

export default CalorieCounter;