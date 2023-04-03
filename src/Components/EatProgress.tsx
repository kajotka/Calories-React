import React from 'react';
import Macronutrients from '../Interface/Macronutrients';
import DishItem from './DishItem';
import ProgressBar from '@ramonak/react-progress-bar';
import { Box } from '@mui/material';

const EatProgress = ({ macroValues, eatenMacros }: { macroValues: Macronutrients; eatenMacros: Macronutrients }) => {
    const colors = ['#FF6B6B', '#FFE66D', '#6BFFB4', '#6D6DFF'];

    const barLabels = [
        { name: 'Kalorie', value: (eatenMacros.ppm / macroValues.ppm * 100).toFixed(0) },
        { name: 'Tłuszcz', value: (eatenMacros.fat / macroValues.fat * 100).toFixed(0) },
        { name: 'Weglowodany', value: (eatenMacros.carbs / macroValues.carbs * 100).toFixed(0) },
        { name: 'Białka', value: (eatenMacros.protein / macroValues.protein * 100).toFixed(0) },
    ];

    return (
        <div className="container" style={{display: "grid"}}>
            {barLabels.map((label, index) => (
                <ProgressBar
                    key={index}
                    completed={label.value}
                    bgColor={colors[index]}
                    height="20px"
                    width="400px"
                    customLabel={`${label.name}: ${label.value}%`}
                    labelAlignment="outside"
                />
            ))}
        </div>
    );
};

export default EatProgress;