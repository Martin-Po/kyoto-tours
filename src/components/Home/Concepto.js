import { Box, Button, Grid, Typography } from '@mui/material'
import ConceptImage1 from '../../assets/concept_image1.jpg'
import ConceptImage2 from '../../assets/concept_image2.jpg'


import React from 'react'
import { Link } from 'react-router-dom';
import { useLang } from '../utils/LangProvider';

const Concepto = () => {
    const { lang } = useLang();

    return (
        <div style={{ width: '100vw', maxWidth: '100%' }}>

            <Grid
                container
                sx={{
                    margin: '50px auto 40px auto',
                    width: '1280px',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    paddingLeft: '1.5rem',
                    paddingRight: '1.5rem',

                    '@media (max-width: 1300px)': {
                        width: '992px',
                    },
                    '@media (max-width:1024px)': {
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                        width: '100%',
                    },
                }}
            >
                <Box sx={{
                    display: 'flex', alignItems: 'center',
                    '@media (max-width:1024px)': {
                        flexDirection: 'column'
                    },
                }}>

                    <Grid
                        item
                        xs={12}
                        lg={6}
                        sx={{
                            display: { lg: 'flex' },

                            flexDirection: 'row',
                            justifyContent: 'center',

                            alignItems: 'center',
                            marginBottom: '20px',

                            '@media (max-width:500px)': {
                                marginBottom: '70px',
                            },
                            '@media (max-width:1024px)': {
                                marginBottom: '20px',

                            },
                        }}
                    >
                        <img
                            style={{
                                borderRadius: '20px',
                                maxWidth: '100%',
                                maxHeight: '500px',
                            }}
                            loading="lazy"
                            src={ConceptImage1}
                            alt="Testimonial"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={6}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginBottom: '20px',
                        }}
                    >
                        <Typography
                            sx={{
                                marginTop: "1rem",
                                fontWeight: "300",
                                fontSize: "1.15rem",
                                textAlign: "center",
                                color: 'black',
                                "@media (max-width:600px)": {
                                    marginBottom: "70px",
                                },
                            }}
                        >
                            {lang === "en"
                                ? 
                                <>
                                    " Let’s explore the best of Kyoto and its surroundings, in a customised way; from most iconic to most off the beaten path locations, with the goal of providing you as well a clear notion of the daily life in this part of the world. "
                                </>
                                : 
                                <>
                                    " Exploremos lo mejor de Kioto y sus alrededores de una manera personalizada; desde los lugares más icónicos hasta los más alejados de las rutas turísticas, con el objetivo de ofrecerte también una clara noción de la vida diaria en esta parte del mundo. "
                                </>
                                    }
                        </Typography>
                    </Grid>
                </Box>

                <Box sx={{
                    display: 'flex', alignItems: 'center',
                    '@media (max-width:1024px)': {
                        flexDirection: 'column-reverse'
                    },
                }}>


                    <Grid
                        item
                        xs={12}
                        lg={6}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginBottom: '20px',

                        }}
                    >
                        <Typography
                            sx={{
                                marginTop: '1rem',
                                fontWeight: '300',
                                fontSize: '1.15rem',
                                '@media (max-width:600px)': {
                                },
                            }}
                        >
                            {lang === 'en'
                                ? 
                                <>
                                    " You can leave it in our hands choosing the best route itinerary applying all our experience of years on guiding and/Or we can chat to find out about your main interests or to add in the route places that you would definitely like to visit
                                    <br />
                                    Please contact us, let’s know each other "
                               
                                </>
                                : <>
                                    " Puedes dejarlo en nuestras manos eligiendo el mejor itinerario de ruta aplicando toda nuestra experiencia de años guiando, o podemos conversar para conocer tus principales intereses y añadir a la ruta los lugares que definitivamente te gustaría visitar.
                                    <br />
                                    Please contact us, let’s know each other "
                                </>
                            }

                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={6}
                        sx={{
                            display: { lg: 'flex' },

                            flexDirection: 'row',
                            justifyContent: 'center',

                            alignItems: 'center',
                            marginBottom: '20px',


                            '@media (max-width:500px)': {
                                marginBottom: '70px',
                            },
                            '@media (max-width:1024px)': {
                                marginBottom: '20px',

                            },
                        }}
                    >
                        <img
                            style={{
                                width: '100%',
                                borderRadius: '20px',
                                maxWidth: '100%',
                                maxHeight: '500px',
                            }}
                            loading="lazy"
                            src={ConceptImage2}
                            alt="Testimonial"
                        />
                    </Grid>
                </Box>

                <Grid
                    item
                    xs={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: '20px',
                    }}
                >
                    <Link
                        to={`/nosotros`}
                    >

                        <Button
                            sx={{
                                marginTop: '1.5rem',
                                paddingTop: '0.75rem',
                                paddingBottom: '0.75rem',
                                paddingLeft: '2rem',
                                paddingRight: '2rem',
                                borderRadius: '35px',
                                fontSize: '1.125rem',
                                backgroundColor: 'primary.main',
                                '@media (max-width:600px)': {
                                    paddingLeft: '1rem',
                                    paddingRight: '1rem',
                                },
                            }}
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
                                {lang === 'en'
                                    ? 'Get to know more about us'
                                    : 'Conocé más sobre nosotros'}

                            </Typography>
                        </Button>
                    </Link>

                </Grid>
            </Grid>
        </div>
    );

}
export { Concepto }
