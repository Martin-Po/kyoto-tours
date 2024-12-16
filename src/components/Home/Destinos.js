import { Box, Button, Card, CardContent, CardMedia, Grid2 as Grid, Typography } from '@mui/material';
import BannerImage from '../../assets/placeholder.svg';
import React from 'react';
import { destinos } from '../../data';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useLang } from '../utils/LangProvider';




const Destinos = () => {
    const theme = useTheme();
    const route = process.env.PUBLIC_URL + '/assets/marcas/'
    const { lang } = useLang();

    const destinationText = { en: {
        text: "Discover Kyoto, Osaka and Nara",
        buttonText: "Visit our tours",
    },
    es: {
        text: "Descubre Kyoto, Osaka y Nara",
        buttonText: "Visita nuestros tours",
    },
    it: {
        text: "Scopri Kyoto, Osaka e Nara",
        buttonText: "Visita i nostri tour",
    },
    fr: {
        text: "Découvrez Kyoto, Osaka et Nara",
        buttonText: "Visitez nos tours",
    },
    };

    return (
        <div style={{ width: '100vw', maxWidth: '100%', backgroundColor: theme.palette.secondary.main }} >
            <Grid
                container
                margin="50px auto 40px auto"

                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
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
                <Grid size={{ xs: 12 }} display="flex" justifyContent="center">
                    <Typography variant="h3" textAlign="center" sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: '1.875rem', marginBottom: '2rem' }} >
                    {destinationText[lang].title}

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
                    {destinos[lang].map((destino, index) => (
                        <Grid
                            key={index}
                            size={{ xs: 12, sm: 4 }}
                            display="flex"
                            justifyContent="center"
                        >
                            <Card
                                sx={{
                                    width: { xs: '100%' }, // Full width on small screens, less padding on medium+
                                }}
                            >
                                <CardMedia

                                    component="img"
                                    sx={{
                                        width: '100%',
                                        objectFit: 'cover', // Ensures the image scales properly

                                        maxHeight: '300px', // Optional: Prevent overly tall images
                                        '@media (max-width: 768px)': {
                                            maxHeight: '100%',  // Sets width to 1280px when screen size is between 1300px and 1399px
                                        },

                                    }}
                                    image={destino.image}
                                    title={destino.city}
                                />
                                <CardContent sx={{ textAlign: 'center' }} >
                                    <Typography gutterBottom variant="h5" component="div">
                                        {destino.city}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {destino.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Grid size={{ xs: 12 }} display="flex" flexDirection="column" alignItems="center">
                <Link to={`/` + lang + `/tours`}>
                        <Button variant="contained" sx={{ marginTop: '1.5rem', borderRadius: '35px', fontWeight: 600, fontSize: '1.125rem', color: 'white', letterSpacing: '0.1rem' }}>
                        {destinationText[lang].buttonText}

                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};

export { Destinos };
