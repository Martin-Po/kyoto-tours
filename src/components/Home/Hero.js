import { Button, Grid2 as Grid, Typography } from '@mui/material'
import Background from '../../assets/portada.jpg'

import { Link } from 'react-router-dom'
import { useLang } from '../utils/LangProvider';
import { Helmet } from 'react-helmet';

import { metaTexts } from "../../metaTextData";
import { SeoHelmet } from '../utils/SeoHelmet';


const Hero = () => {
    const { lang } = useLang();

    const heroText = {
        en: {
            title: "KYOSAKA TOURS",
            subtitle_1: "The best possible tours in Kyoto, Osaka, Nara and beyond",

            subtitle_2: (
                <>                    
                    Unique experiences designed by local experts
                    <br/>
                    From iconic landmarks to places where you will not see other travellers
                </>
            ),
        },
        es: {
            title: "KYOSAKA TOURS",
            subtitle_1: "Los mejores recorridos posibles en Kioto, Osaka, Nara y más allá",

            subtitle_2: (
                <>   
                    Experiencias únicas diseñadas por expertos locales
                    <br/>
                    Desde lugares icónicos hasta rincones donde no verás a otros viajeros
                </>
            ),
        },
        it: {
            title: "KYOSAKA TOURS",
            subtitle_1: "I migliori tour possibili a Kyoto, Osaka, Nara e oltre",

            subtitle_2: (
                <>     
                    Esperienze uniche create da esperti locali
                    <br />
                    Da luoghi iconici a posti in cui non vedrai altri viaggiatori.
                </>
            ),
        },
        fr: {
            title: "KYOSAKA TOURS",
            subtitle_1: "Les meilleures visites possibles à Kyoto, Osaka, Nara et au-delà",

            subtitle_2: (
                <>       
                    Expériences uniques conçues par des experts locaux
                    <br />
                    Des monuments emblématiques aux endroits où vous ne rencontrerez pas d'autres voyageurs.
                </>
            ),
        },
    };

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
            <SeoHelmet lang={lang} page="home" />

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
                        {heroText[lang].title}

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
                            fontWeight: 'bold',
                            fontSize: '2.5rem',
                            margin: '2rem',
                            '@media (max-width:600px)': {
                                fontSize: '1.5rem',
                                margin: '0',
                                paddingTop: '1.25rem',
                            },
                        }}
                    >
                        {heroText[lang].subtitle_1}  
                        
                    </Typography>
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
                        {heroText[lang].subtitle_2}

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
                    <Link to={`/` + lang + `/tours`}>
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
