import { Box, Button, Card, CardContent, CardMedia, Grid2 as Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useLang } from "./utils/LangProvider";
import { ToursData } from "../data";
import { useState } from "react";


const Tours = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [selectedTour, setSelectedTour] = useState()
    const [date, setDate] = useState(null)


    const { lang } = useLang();

    const handleselectedTourChange = (event) => {
        setSelectedTour(event.target.value)
    }


    return (
        <div style={{ width: '100vw', maxWidth: '100%' }}>
            <Grid
                container
                margin="50px auto 40px auto"
                columnSpacing={4}
                rowSpacing={'2rem'}

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
                        {lang === 'en' ? 'Our Tours' : 'Nuestros Tours'}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '1.125rem',
                            lineHeight: '1.75rem',
                            marginBottom: '1rem',
                        }}
                    >
                        {lang === 'en' ? (
                            <>
                                We offer unique and personalized experiences in Kyoto, Osaka, and Nara. Each tour is designed to suit your interests and preferences, ensuring an unforgettable experience in Japan.
                            </>
                        ) : (
                            <>
                                Ofrecemos experiencias únicas y personalizadas en Kyoto, Osaka y Nara. Cada tour está diseñado para adaptarse a tus intereses y preferencias, garantizando una experiencia inolvidable en Japón.
                            </>
                        )}
                    </Typography>

                </Grid>

                <Grid
                    container
                    columnSpacing={3}
                    rowSpacing={4}
                    sx={{
                        height: { xs: 'auto', }, // Adjusts height based on screen size
                    }}
                >
                    {ToursData[lang].map((tour, index) => (
                        <Grid
                            key={index}
                            size={{ xs: 12, sm: 6, md: 3, }}
                            display="flex"
                            justifyContent="center"
                        >
                            <Card
                                sx={{
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                        maxWidth: '445px',
                                        maxHeight: '445px', // Optional: Prevent overly tall images
                                        aspectRatio: 1 / 1
                                    }}
                                    image={tour.image}
                                    title={tour.name}
                                />
                                <CardContent sx={{ textAlign: 'left' }} >
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: '600', fontSize: '1.25rem', lineHeight: '1.75rem' }}>
                                        {tour.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {lang === 'en' ? 'Price: ' : 'Precio: '}
                                        {tour.precio}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {lang === 'en' ? 'Capacity: ' : 'Capacidad: '}
                                        {tour.capacidad}
                                        {lang === 'en' ? ' people' : ' personas'}

                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                    <Grid
                        container
                        sx={{ backgroundColor: 'secondary.main', width: '100%', padding: '1.5rem' }}
                    >

                        <Grid
                            size={{ xs: 12 }}

                        >
                            <Box>
                                <Box sx={{ display: 'flex', gap: '1rem' }}>
                                    <TextField
                                        label={lang === 'en' ? "Name" : 'Nombre'}
                                        fullWidth
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        sx={{ marginBottom: '1.5rem', backgroundColor: 'white' }}
                                    />
                                    <TextField
                                        label="Email"
                                        fullWidth
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        sx={{ marginBottom: '1.5rem', backgroundColor: 'white' }}

                                    />

                                </Box>
                                <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>

                                    <Select
                                        sx={{ justifyContent: 'space-around', backgroundColor: 'white' }}
                                        labelId="Tour"
                                        id="Tour-select"
                                        value={selectedTour}
                                        onChange={handleselectedTourChange}
                                        label="Tour"
                                        fullWidth
                                    >
                                        {ToursData[lang].map((tour) => (
                                            <MenuItem value={tour} key={tour.id}>
                                                {tour.name}{' '}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    
                                </Box>

                                <TextField
                                    label={lang === 'en' ? "Message" : 'Mensaje'}

                                    fullWidth
                                    multiline
                                    rows={4}
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    sx={{ marginBottom: '1.5rem', backgroundColor: 'white' }}

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
                    </Grid>
                </Grid>

            </Grid>


        </div>
    )
}

export { Tours }
