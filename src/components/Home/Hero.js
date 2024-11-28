import { Button, Grid2 as Grid, Typography } from '@mui/material'
import Background from '../../assets/placeholder.svg'
import { Link } from 'react-router-dom'
import { useLang } from '../utils/LangProvider';
import { Helmet } from 'react-helmet';

const Hero = () => {
    const { lang } = useLang();

    return (
        <div
            style={{
                width: '100vw',
                maxWidth: '100%',
                minHeight: '80vh',
                position: 'relative',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex', // Flexbox for centering
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
            }}
        >
            <Helmet>
            {/* Page Title */}
    <title>
        {lang === 'en' 
            ? 'Best Tours in Kyoto, Osaka & Nara | Unique Travel Experiences - Best of Kyoto' 
            : 'Mejores Tours en Kyoto, Osaka y Nara | Experiencias Únicas - Best of Kyoto'}
    </title>

    {/* Meta Description */}
    <meta 
        name="description" 
        content={
            lang === 'en' 
                ? 'Discover the beauty of Kyoto, Osaka, and Nara with personalized tours. Explore Japan´s culture, history, and cuisine with local expert guides.' 
                : 'Descubre la belleza de Kyoto, Osaka y Nara con tours personalizados. Explora la cultura, historia y gastronomía de Japón con guías expertos locales.'
        } 
    />

    {/* Open Graph Tags */}
    <meta property="og:title" 
        content={
            lang === 'en' 
                ? 'Best Tours in Kyoto, Osaka & Nara | Unique Travel Experiences - Best of Kyoto' 
                : 'Mejores Tours en Kyoto, Osaka y Nara | Experiencias Únicas - Best of Kyoto'
        } 
    />
    <meta property="og:description" 
        content={
            lang === 'en' 
                ? 'Discover the beauty of Kyoto, Osaka, and Nara with personalized tours. Explore Japan´s culture, history, and cuisine with local expert guides.' 
                : 'Descubre la belleza de Kyoto, Osaka y Nara con tours personalizados. Explora la cultura, historia y gastronomía de Japón con guías expertos locales.'
        } 
    />
    <meta property="og:image" content="%PUBLIC_URL%/images/logo_light.webp" />
    <meta property="og:type" content="website" />

    
            </Helmet>
            <Grid
                container
                direction="column"
                sx={{
                    width: '1280px',
                    height: 'fit-content',
                    '@media (max-width: 1300px)': {
                        width: '992px',
                        paddingLeft: '1.5rem',
                        paddingRight: '1.5rem',
                        marginBottom: '20px',
                    },
                    '@media (max-width:1024px)': {
                        width: '100%',
                    },
                }}
            >
                <Grid
                    xs={3}
                    sx={{
                        textAlign: 'center', // Ensures content alignment inside the grid
                    }}
                >
                    <Typography
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '4rem',
                            margin: '2rem',
                            '@media (max-width:600px)': {
                                fontSize: '2rem',
                                margin: '0',
                                paddingTop: '1.25rem',
                            },
                        }}
                    >
                        Best Tours in Kyoto, Osaka and Nara
                    </Typography>
                </Grid>
                <Grid
                    xs={3}
                    sx={{
                        textAlign: 'center',
                        marginBottom: '2rem',
                    }}
                >
                    <Typography
                        sx={{
                            color: 'white',
                            marginTop: '1rem',
                            fontWeight: '300',
                            fontSize: '2rem',
                            '@media (max-width:600px)': {
                                fontSize: '1.5rem',
                            },
                        }}
                    >
                        Experiencias únicas diseñadas por expertos locales
                    </Typography>
                </Grid>
                <Grid
                    xs={1}
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                     <Link
                        to={`/tours`}>
                    <Button
                        sx={{
                            marginTop: '1.5rem',
                            paddingTop: '0.75rem',
                            paddingBottom: '0.75rem',
                            paddingLeft: '2rem',
                            paddingRight: '2rem',
                            borderRadius: '35px',
                            fontSize: '1.75rem',
                            backgroundColor: 'secondary.main',
                            '@media (max-width:600px)': {
                                paddingLeft: '1rem',
                                paddingRight: '1rem',
                            },
                        }}
                        variant="contained"
                    >
                        <Typography
                            sx={{
                                color: 'primary.main',
                                fontWeight: 'bold',
                                '@media (max-width:600px)': {
                                    fontSize: '0.85rem',
                                },
                            }}
                        >
                            ver tours
                        </Typography>
                    </Button>

                        </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export { Hero }
