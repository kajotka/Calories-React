import React, { useState } from "react";
import PersonFormInterface from "../Interface/PersonFormInterface";
import {
    FormControl,
    InputLabel,
    TextField,
    Select,
    Button,
    MenuItem,
    FormGroup
} from '@mui/material';

interface FormProps {
    handleSubmit: (values: PersonFormInterface) => void;
    ppm: number;
}

const PersonForm = ({ handleSubmit, ppm }: FormProps) => {
    const [values, setValues] = useState<PersonFormInterface>({
        height: 0,
        weight: 0,
        age: 0,
        gender: "",
    });

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit(values);
    };

    return (

        <form onSubmit={handleFormSubmit} id="person-form">
            <FormGroup row={true}>
            <FormControl >
                <TextField
                    id="height-input"
                    type="number"
                    label="Wzrost"
                    onChange={(e) =>
                        setValues({ ...values, height: Number(e.target.value) })
                    }
                />
            </FormControl>
            <FormControl >
                <TextField
                    id="weight-input"
                    type="number"
                    label={"Waga"}
                    onChange={(e) =>
                        setValues({ ...values, weight: Number(e.target.value) })
                    }
                />
            </FormControl>
            <FormControl >
                <TextField
                    id="age-input"
                    label={"Wiek"}
                    type="number"
                    onChange={(e) =>
                        setValues({ ...values, age: Number(e.target.value) })
                    }
                />
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="gender-select">Płeć</InputLabel>
                <Select
                    id="gender-select"
                    label="Age"
                    autoWidth
                    style={{ width: 200 }}
                    onChange={(e) =>
                        setValues({ ...values, gender: e.target.value as string })
                    }
                >
                    <MenuItem value="">Wybierz</MenuItem>
                    <MenuItem value="male">Mężczyzna</MenuItem>
                    <MenuItem value="female">Kobieta</MenuItem>
                </Select>
            </FormControl>
            <Button
                variant="contained"
                color="primary"
                type="submit"
            >
                Submit
            </Button>
            </FormGroup>
        </form>
    );
};

export default PersonForm;
