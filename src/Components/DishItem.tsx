import React from "react";
import FoodItem from "../Interface/FoodItem";
import './dishItem.scss'
import {
    Avatar,
    Button,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DishItem = ({ food, onAdd }: { food: FoodItem; onAdd: (dish: FoodItem) => void }) => {
    let item = food.food;
    if (!item.image) {
        return null;
    }

    return (
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={item.image} />
                </ListItemAvatar>
                <ListItemText
                    primary={item.label}
                    secondary={
                        <React.Fragment>
                            <Stack
                                direction="row"
                                divider={<Divider orientation="vertical" flexItem />}
                                spacing={2}
                            >
                                <Item>Kalorie: {item.nutrients.ENERC_KCAL.toFixed(0)} kcal</Item>
                                <Item>Białko: {item.nutrients.PROCNT.toFixed(2)}g</Item>
                                <Item>Tłuszcz: {item.nutrients.FAT.toFixed(2)}g</Item>
                                <Item>Węglowodany: {item.nutrients.CHOCDF.toFixed(2)}g</Item>
                                <Button onClick={() => onAdd(food)} variant="contained">Dodaj</Button>
                            </Stack>
                        </React.Fragment>
                    }
                />
            </ListItem>
    );
}

export default DishItem;