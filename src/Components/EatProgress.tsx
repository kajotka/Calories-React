import Macronutrients from '../Interface/Macronutrients';
import ProgressBar from '@ramonak/react-progress-bar';

const EatProgress = ({ macroValues, eatenMacros }: { macroValues: Macronutrients; eatenMacros: Macronutrients }) => {

    const barLabels = [
        { 
            name: 'Kalorie', 
            value: (eatenMacros.ppm / macroValues.ppm * 100).toFixed(0), 
            eaten: (eatenMacros.ppm).toFixed(0), 
            total: (macroValues.ppm).toFixed(0), 
            unit: 'kcal',
            color: '#FF6B6B'
        },
        { 
            name: 'Tłuszcz', 
            value: (eatenMacros.fat / macroValues.fat * 100).toFixed(0), 
            eaten: (eatenMacros.fat).toFixed(0), 
            total: (macroValues.fat).toFixed(0), 
            unit: 'g',
            color: '#FFE66D'
        },
        { 
            name: 'Weglowodany', 
            value: (eatenMacros.carbs / macroValues.carbs * 100).toFixed(0), 
            eaten: (eatenMacros.carbs).toFixed(0), 
            total: (macroValues.carbs).toFixed(0), 
            unit: 'g',
            color: '#6BFFB4'
        },
        { 
            name: 'Białka', 
            value: (eatenMacros.protein / macroValues.protein * 100).toFixed(0), 
            eaten: (eatenMacros.protein).toFixed(0), 
            total: (macroValues.protein).toFixed(0), 
            unit: 'g',
            color: '#6D6DFF'
        }
    ];

    return (
        <div className="container" style={{ display: "grid" }}>
            {barLabels.map((label, index) => (
                <ProgressBar
                    key={index}
                    completed={label.value}
                    bgColor={label.color}
                    height="20px"
                    width="400px"
                    customLabel={`${label.name}: ${label.value}% (${label.eaten} / ${label.total}${label.unit})`}
                    labelAlignment="outside"
                    completedClassName="full"
                />
            ))}
        </div>
    );
};

export default EatProgress;