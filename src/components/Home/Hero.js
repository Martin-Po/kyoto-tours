import { Button, Grid2 as Grid, Typography } from '@mui/material'
import Background from '../../assets/portada.jpg'

import { Link } from 'react-router-dom'
import { useLang } from '../utils/LangProvider';
import { Helmet } from 'react-helmet';

const Hero = () => {
    const { lang } = useLang();

    const baseUrl = window.location.origin; // Esto obtiene el dominio base (ej. https://kyoto-tours.vercel.app)
    const esUrl = `${baseUrl}/es/home`; // URL para la versión en español de la página home
    const enUrl = `${baseUrl}/en/home`; // URL para la versión en inglés de la página home
    const canonicalUrl = lang === 'en' ? enUrl : esUrl; // Set the canonical URL for the current language


    return (
        <div
            style={{
                width: '100vw',
                maxWidth: '100%',
                minHeight: '95vh',
                position: 'relative',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '40% 60%', // Horizontal 40%, Vertical 60% offset
                display: 'flex', // Flexbox for centering
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
            }}
        >
            <Helmet htmlAttributes={{lang: lang,}}  >

                <link rel="alternate" href={enUrl} hreflang="en" />
                <link rel="alternate" href={esUrl} hreflang="es" />
                <link rel="alternate" href={baseUrl} hreflang="x-default" />

                {/* Canonical tag */}
                <link rel="canonical" href={canonicalUrl} />
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
                            : 'Unique experiences designed by local experts. From iconic landmarks to places where you will not see other travellers.'
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
                <meta property="og:image" content="%PUBLIC_URL%/images/logo_light.webpp" />
                <meta property="og:type" content="website" />
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title"
                    content={
                        lang === 'en'
                            ? 'Best Tours in Kyoto, Osaka & Nara | Unique Travel Experiences - Best of Kyoto'
                            : 'Mejores Tours en Kyoto, Osaka y Nara | Experiencias Únicas - Best of Kyoto'
                    }
                />
                <meta name="twitter:description"
                    content={
                        lang === 'en'
                            ? 'Discover the beauty of Kyoto, Osaka, and Nara with personalized tours. Explore Japan´s culture, history, and cuisine with local expert guides.'
                            : 'Descubre la belleza de Kyoto, Osaka y Nara con tours personalizados. Explora la cultura, historia y gastronomía de Japón con guías expertos locales.'
                    }
                />
                <meta name="twitter:image" content="%PUBLIC_URL%/images/logo_light.webp" />


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
                        {lang === 'en' 
                        ? 'Best of Kyoto and Beyond' 
                        : 'Best of Kyoto and Beyond'}    
                        
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
                         {lang === 'en' 
                        ? <>
                            Unique experiences designed by local experts
                            <br/>
                            From iconic landmarks to places where you will not see other travellers
                            </>
                        : <>
                            Experiencias únicas diseñadas por expertos locales
                            <br/>
                            Desde lugares icónicos hasta rincones donde no verás a otros viajeros
                          </> 
                        }
                        
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
                                 {lang === 'en' 
                        ? 'See our tours' 
                        : 'ver tours'}
                                
                            </Typography>
                        </Button>

                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export { Hero }
