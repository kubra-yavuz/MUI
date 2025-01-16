import {
    Box,
    FormControlLabel,
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,

} from '@mui/material';
import { useState } from 'react';

export const LessonCheckbox = () => {

    const [isAccept, setIsAccept] = useState(false);
    const [knowlegde, setKnowlegde] = useState<string[]>([]);
    console.log(knowlegde);


    const handleKnowledgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const index = knowlegde.indexOf(e.target.value);
        if (index === -1) {
            setKnowlegde([...knowlegde, e.target.value])
        }
        else {
            setKnowlegde(knowlegde.filter((item) => item !== e.target.value))

        }
    }

    return (
        <Box>
            <Box>
                <FormControl>
                    <FormLabel>
                        Eğitim Durumu
                    </FormLabel>
                    <FormGroup row>
                        <FormControlLabel disabled control={<Checkbox />} label="Lise">
                        </FormControlLabel>
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Üniversite">
                        </FormControlLabel>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="İlkokul">
                        </FormControlLabel>

                    </FormGroup>
                </FormControl>
            </Box >
            <Box>
                <FormControl>
                    <FormLabel>
                        Eğitim Durumu
                    </FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox
                                checked={isAccept}
                                onChange={(e) => setIsAccept(e.target.checked)} />} label="Kullanım Koşullarını Kabul Ediyorum.">
                        </FormControlLabel>


                    </FormGroup>
                </FormControl>
            </Box >
            <Box>
                <FormControl>
                    <FormLabel>
                        Frontendde Neleri Biliyorsun ?
                    </FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            value="react"
                            control={
                                <Checkbox
                                    checked={knowlegde.includes('react')}
                                    onChange={handleKnowledgeChange}
                                />} label="React JS">
                        </FormControlLabel>
                        <FormControlLabel
                            value="angular"
                            control={
                                <Checkbox
                                    checked={knowlegde.includes('angular')}
                                    onChange={handleKnowledgeChange}
                                />} label="Angular">
                        </FormControlLabel>
                        <FormControlLabel
                            value="vue"
                            control={
                                <Checkbox
                                    checked={knowlegde.includes('vue')}
                                    onChange={handleKnowledgeChange}
                                />} label="Vue JS">
                        </FormControlLabel>


                    </FormGroup>
                </FormControl>
            </Box >
        </Box>

    )
}

export default LessonCheckbox
