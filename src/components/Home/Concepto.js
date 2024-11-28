import { Box, Button, Grid, Typography } from '@mui/material'
import BannerImage from '../../assets/placeholder.svg'
import React from 'react'
import { Link } from 'react-router-dom';

const Concepto = () => {
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
                            justifyContent: 'flex-start',
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
                                width: '100%',
                                maxWidth: '500px',
                                maxHeight: '500px',
                            }}
                            loading="lazy"
                            src={BannerImage}
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
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                                alignSelf: 'start',
                                color: 'primary.main',
                                lineHeight: '2rem',
                                '@media (max-width:600px)': { fontWeight: '600' },
                            }}
                        >
                            Experiencia Local Auténtica
                        </Typography>
                        <Typography
                            sx={{
                                marginTop: '1rem',
                                fontWeight: '300',
                                fontSize: '1.15rem',
                                '@media (max-width:600px)': {
                                    marginBottom: '70px',

                                },
                            }}
                        >
                            Nuestros tours están diseñados y guiados por expertos locales con años de experiencia, ofreciendo una perspectiva única y auténtica de Kyoto, Osaka y Nara.

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
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                                alignSelf: 'start',
                                color: 'primary.main',
                                lineHeight: '2rem',
                                '@media (max-width:600px)': { fontWeight: '600' },

                            }}
                        >
                            Tours Personalizados
                        </Typography>
                        <Typography
                            sx={{
                                marginTop: '1rem',
                                fontWeight: '300',
                                fontSize: '1.15rem',
                                '@media (max-width:600px)': {
                                },
                            }}
                        >
                            Adaptamos cada tour a tus intereses y preferencias, asegurando una experiencia única y memorable en cada visita.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={6}
                        sx={{
                            display: { lg: 'flex' },

                            flexDirection: 'row',
                            justifyContent: 'flex-end',

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
                                maxWidth: '500px',
                                maxHeight: '500px',
                            }}
                            loading="lazy"
                            src={BannerImage}
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
                                Conocé más sobre nosotros
                            </Typography>
                        </Button>
                    </Link>

                </Grid>
            </Grid>
        </div>
    );

}
export { Concepto }
