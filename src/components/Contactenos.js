import { Box, Button, Divider, FormControl, Grid2 as Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useLang } from "./utils/LangProvider";

const Contactenos = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const { lang } = useLang();


    return (
        <div style={{ width: '100vw', maxWidth: '100%' }}>
            <Grid
                container
                margin="50px auto 40px auto"
                columnSpacing={4}

                display="flex"
                justifyContent="space-evenly"
                alignItems='flex-start'
                sx={{
                    width: '100%', // Default width for smaller screens
                    maxWidth: '1400px', // Limits the maximum width to 1400px
                    '@media (max-width:1399px)': {
                        width: '1280px', // Sets width to 1280px when screen size is between 1300px and 1399px
                    },
                    '@media (max-width:1299px)': {
                        width: '100%', // Full width for screens 1299px or smaller
                    },
                }}
                paddingX={{ xs: '1rem', md: '1.5rem' }}
            >
                <Grid
                    size={12}

                >
                    <Typography sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: '1.875rem', marginBottom: '1.5rem' }}>
                        {lang === 'en' ? 'Contact Us' : 'Contáctenos'}
                    </Typography>

                </Grid>
                <Grid
                    size={{ xs: 12, sm: 6 }}

                >
                    <Box>
                        <TextField
                            label={lang === 'en' ? "Name" : 'Nombre'}
                            fullWidth
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            sx={{marginBottom:'1.5rem'}}
                        />
                        <TextField
                            label="Email"
                            fullWidth
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            sx={{marginBottom:'1.5rem'}}

                        />
                        <TextField
                            label={lang === 'en' ? "Message" : 'Mensaje'}

                            fullWidth
                            multiline
                            rows={4}
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            sx={{marginBottom:'1.5rem'}}

                        />

                    </Box>
                    <Button 
                        variant="contained"
                    
                    >
                        <Typography
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                '@media (max-width:600px)': {
                                    fontSize: '0.85rem',
                                },
                            }}
                        >                           
                        {lang === 'en' ? 'Send message' : 'Enviar mensaje'}
                        </Typography>
                    </Button>

                </Grid>

                <Grid
                    size={{ xs: 12, sm: 6 }}


                >
                    <Typography sx={{ fontWeight: '600', fontSize: '1.5rem', lineHeight: '2rem', marginBottom: '1rem' }}>
                        {lang === 'en' ? 'Contact Information' : 'Información de Contacto'}

                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1,  marginBottom:'0.5rem'}}>
                        <Typography fontWeight="bold">Email:</Typography>
                        <Typography color='primary.main'>info@besttoursinkyoto.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

                    <Typography fontWeight="bold">{lang === 'en' ? 'Phone' : 'Teléfono'}</Typography>
                    <Typography color='primary.main'>+81 123-456-789</Typography>

                    </Box>

                </Grid>

            </Grid>
        </div>
    )
}

export { Contactenos }
