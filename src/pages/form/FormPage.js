import { Box, Button, TextField } from '@mui/material';
import {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import { SX } from './FormStyle'

function FormPage() {
    const { setAuth } = useAuth()

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/letters-corporate";

    const [lettering, setLettering] = useState({
        text: '',
        font: '',
        height: '',
        width: ''
    });

    const {text, font, height, width} = lettering;

    const handleChange = event => setLettering({...lettering, [event.target.name]: event.target.value});

    const handleSubmit = async event => {
        event.preventDefault();    

        setAuth({ token: lettering})
        navigate(from, {replace: true});
    }

    return (
        <Box sx={SX.box}>
            <Box component="form" onSubmit={handleSubmit}>
            <TextField 
            margin='normal'
            type="text"
            name="text"
            label="Texto"
            value={text}
            onChange={handleChange}
            fullWidth
            required
            />
            <TextField 
            margin='normal'
            type="text"
            name="font"
            label="Tipografía"
            value={font}
            onChange={handleChange}
            fullWidth
            required
            />
            <TextField 
            margin='normal'
            type="text"
            name="height"
            label="Alto"
            value={height}
            onChange={handleChange}
            fullWidth
            required
            />
            <TextField 
            margin='normal'
            type="text"
            name="width"
            label="Ancho"
            value={width}
            onChange={handleChange}
            fullWidth
            required
            />

            <Button 
            type="submit" 
            variant="contained" 
            fullWidth
            >
            Aplicar
          </Button>
        </Box>
        </Box>
    )
}

export default FormPage;