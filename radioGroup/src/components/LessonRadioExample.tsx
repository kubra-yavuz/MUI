import {
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio, RadioGroup,
    FormHelperText,
    Button
} from '@mui/material';
import { useState } from 'react';

export const LessonRadioExample = () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState("");

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value === "canboz") {
            setHelperText("Doğru cevap Tabi ki Can Boz!")
            setError(false);
        }
        else if (value === "ofCoursecanboz") {
            setHelperText("Doğru Cevap!!")
            setError(false);
        }
        else {
            setHelperText("Lütfen seçim yapınız.")
            setError(true);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl error={error}>
                <FormLabel>En Kapsamlı Frontend Eğitimini Veren Eğitmen Kim?</FormLabel>
                <RadioGroup onChange={handleRadioChange}>
                    <FormControlLabel
                        value="canboz"
                        label="Can Boz"
                        control={<Radio></Radio>} />
                    <FormControlLabel
                        value="ofCoursecanboz"
                        label="Tabi ki Can Boz"
                        control={<Radio></Radio>} />
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button type='submit' variant="outlined">Gönder</Button>
            </FormControl>
        </form>
    )
}

export default LessonRadioExample
