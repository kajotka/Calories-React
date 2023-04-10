import FoodItem from "../Interface/FoodItem";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const DishesTable = ({dishes}: {dishes: FoodItem[]}) => {
    return (
        <TableContainer component={Paper} className="container transparent">
            <h1>Posiłki dzisiaj</h1>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Danie</TableCell>
                        <TableCell align="right">Kalorie</TableCell>
                        <TableCell align="right">Tłuszcz&nbsp;(g)</TableCell>
                        <TableCell align="right">Węglowodany&nbsp;(g)</TableCell>
                        <TableCell align="right">Białka&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dishes.map((food) => (
                        <TableRow key={food.food.foodId + Math.floor(Math.random() * 1000)}>
                            <TableCell component="th" scope="row">
                                {food.food.label}
                            </TableCell>
                            <TableCell align="right">{food.food.nutrients.ENERC_KCAL.toFixed(0)}</TableCell>
                            <TableCell align="right">{food.food.nutrients.FAT.toFixed(1)}</TableCell>
                            <TableCell align="right">{food.food.nutrients.CHOCDF.toFixed(1)}</TableCell>
                            <TableCell align="right">{food.food.nutrients.PROCNT.toFixed(1)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DishesTable;
