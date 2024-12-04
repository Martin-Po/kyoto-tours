import { Grid2 as Grid, Typography } from "@mui/material";
import { useLang } from "./utils/LangProvider";
import GuideImage from '../assets/placeholder.svg'
import { AboutImages } from "../data";
import { Helmet } from 'react-helmet';


const Nosotros = () => {
    const { lang } = useLang();

    const baseUrl = window.location.origin; // Esto obtiene el dominio base (ej. https://kyoto-tours.vercel.app)
    const esUrl = `${baseUrl}/es/about`; // URL para la versión en español de la página home
    const enUrl = `${baseUrl}/en/about`; // URL para la versión en inglés de la página home
    const canonicalUrl = lang === 'en' ? enUrl : esUrl; // Set the canonical URL for the current language


    return (
        <div style={{ width: '100vw', maxWidth: '100%' }}>
            <Helmet htmlAttributes={{lang: lang,}}  >
                <link rel="alternate" href={enUrl} hreflang="en" />
                <link rel="alternate" href={esUrl} hreflang="es" />
                <link rel="alternate" href={baseUrl} hreflang="x-default" />
                {/* Canonical tag */}
                <link rel="canonical" href={canonicalUrl} />
                <title>{lang === 'en'
                    ? 'About Us | Best Tours in Kyoto, Osaka & Nara - Best of Kyoto'
                    : 'Sobre Nosotros | Mejores Tours en Kyoto, Osaka y Nara - Best of Kyoto'}</title>
                <meta name='description' content={lang === 'en'
                    ? 'Learn about our passion for showcasing Japan’s culture, history, and beauty through personalized travel experiences.'
                    : 'Conoce nuestra pasión por mostrar la cultura, historia y belleza de Japón a través de experiencias de viaje personalizadas.'} />
                {/* Open Graph Tags */}
                <meta property="og:title"
                    content={
                        lang === 'en'
                            ? 'About Us | Best Tours in Kyoto, Osaka & Nara - Best of Kyoto'
                            : 'Sobre Nosotros | Mejores Tours en Kyoto, Osaka y Nara - Best of Kyoto'
                    }
                />
                <meta property="og:description"
                    content={
                        lang === 'en'
                            ? 'Learn about our passion for showcasing Japan’s culture, history, and beauty through personalized travel experiences.'
                            : 'Conoce nuestra pasión por mostrar la cultura, historia y belleza de Japón a través de experiencias de viaje personalizadas.'
                    }
                />
                <meta property="og:image" content="%PUBLIC_URL%/images/logo_light.webp" />
                <meta property="og:type" content="website" />
            </Helmet>
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
                        {lang === 'en' ? 'About Us' : 'Quiénes Somos'}
                    </Typography>
                    <Typography sx={{ fontWeight: '600', fontSize: '1.5rem', lineHeight: '2rem', marginBottom: '1rem' }}>
                        {lang === 'en' ? 'Our Philosophy' : 'Nuestra Filosofía'}
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
                                We like to meet and communicate with people of all backgrounds and nationalities, either solo travellers, couples, families, groups of friends, young, aged, etc.
                                <br />
                                We will adapt to different kinds of motivations and points of views.
                                <br />
                                We value empathy and we  hope, as usually happens, to end the tour with a feeling of  friendship.
                            </>
                        ) : (
                            <> 
                                Nos gusta conocer y comunicarnos con personas de todos los orígenes y nacionalidades, ya sean viajeros solitarios, parejas, familias, grupos de amigos, jóvenes, mayores, etc.
                                <br /> 
                                Nos adaptaremos a diferentes tipos de motivaciones y puntos de vista.
                                <br /> 
                                Valoramos la empatía y esperamos, como suele suceder, terminar el tour con un sentimiento de amistad.
                            </>
                        )}
                    </Typography>

                </Grid>
                <Grid
                    size={12}

                >

                    <Typography sx={{ fontWeight: '600', fontSize: '1.5rem', lineHeight: '2rem', marginBottom: '1rem' }}>
                        {lang === 'en' ? 'Hi there! Thanks very much for visiting this site 🙏 ' : '¡Hola! Muchas gracias por visitar este sitio. 🙏'}
                    </Typography>
                </Grid>
                <Grid
                    container>

                    <Grid
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                        size={{ xs: 12, sm: 'auto' }}
                    >
                        <img
                            style={{
                                borderRadius: '20px',
                                width: '300px',
                                maxWidth: '100%',
                                aspectRatio: 1 / 1
                            }}
                            loading="lazy"
                            src={GuideImage}
                            alt="Testimonial"
                        />


                    </Grid>
                    <Grid
                        size='grow'
                    >
                        <Typography sx={{ fontWeight: '600', fontSize: '1.5rem', lineHeight: '2rem', marginBottom: '1rem' }}>
                            {'Alex (Alejandro Oberti)'}
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
                                    I’m Alex(Alejandro Oberti) Before ending up in Japan, many years back, I had a nomad life across several Asian countries for many years as well. I spent most of that time in India, where among other activities I had my first experiences as a tour guide. There I also met my wife, and when the relationship got more serious we decided to settle down and have a more stable life, we chose Japan where she is from. 
                                    <br /> 
                                    Since then I had many personal experiences in this country in different fields such as human relations, jobs in different sectors, trips, bizarre situations, etc, experiences that I always like to share, together with some knowledge about aspects of the culture that I studied for years, just for the sake of getting knowledge without thinking that I would do this activity later on. 
                                    <br /> 
                                    By the way, I appreciate a lot the human factor, and besides having a responsibility I enjoy a lot just meeting and being with new people. In other words; I love this job, I love the culture I show, and I love human communication in itself. 
                                    <br /> 
                                    Let’s meet and spend time together so I can show you the best of this city, the cultural capital of Japan
                                </>
                            ) : (
                                <>                                    
                                ¡Hola! Soy Alex (Alejandro Oberti). Antes de establecerme en Japón, llevé una vida nómada durante muchos años, recorriendo varios países de Asia. Pasé la mayor parte de ese tiempo en la India, donde, además de otras actividades, tuve mis primeras experiencias como guía turístico. Fue allí donde conocí a mi esposa, y cuando nuestra relación se volvió más seria, decidimos establecernos y tener una vida más estable. Elegimos Japón, su país natal.
                                <br /> 
                                Desde entonces, he tenido muchas experiencias personales en este país en diferentes ámbitos: relaciones humanas, trabajos en diversos sectores, viajes, situaciones curiosas, entre otras. Estas vivencias siempre me gusta compartirlas, junto con conocimientos sobre aspectos de la cultura que estudié durante años, simplemente por el placer de aprender, sin imaginar que algún día me dedicaría a esta actividad.
                                <br /> 
                                Valoro enormemente el factor humano. Además de sentir la responsabilidad de mi trabajo, disfruto mucho conociendo y compartiendo tiempo con nuevas personas. En otras palabras, amo este trabajo, amo la cultura que muestro y amo la comunicación humana en sí misma.
                                <br /> 
                                ¡Conozcámonos y pasemos tiempo juntos! Déjame mostrarte lo mejor de esta ciudad, la capital cultural de Japón.
                                </>
                            )}
                        </Typography>

                    </Grid>
                        <Typography sx={{ fontWeight: '600', fontSize: '1.15rem', lineHeight: '2rem', marginBottom: '1rem' }}>
                            {lang === 'en' 
                                ?   'Other hosts here are freelance tour guides in who I put all my trust; for being so friendly, nice to spend time with, for having years of experience doing this activity and for their general experiences living here'
                                :   "Otros guías aquí son guías turísticos independientes en quienes deposito toda mi confianza; por ser tan amables, por lo agradable que es pasar tiempo con ellos, por tener años de experiencia en esta actividad y por sus experiencias generales viviendo aquí."
                            }
                        </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                margin="50px auto 40px auto"
                columnSpacing={'1rem'}
                rowSpacing={'1rem'}

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
                {AboutImages.map(image => {
                    return (
                        <Grid
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                            size={{ xs: 12, sm: 4, md: 3, }}
                        >
                            <img
                                style={{
                                    borderRadius: '15px',
                                    width: '350px',
                                    maxWidth: '100%',
                                    aspectRatio: 1 / 1
                                }}
                                loading="lazy"
                                src={image.url}
                                alt="Testimonial"
                            />
                        </Grid>

                    )
                }
                )}
            </Grid>

        </div>)
}

export { Nosotros }
