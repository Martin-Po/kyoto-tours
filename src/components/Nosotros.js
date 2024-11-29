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
                                At Best Tours in Kyoto, Osaka, and Nara, we believe in offering unique and personalized travel experiences. Our mission is to showcase the beauty and culture of Japan through the eyes of a local, allowing our clients to fully immerse themselves in the rich history and traditions of these fascinating cities.
                                <br />
                                <br />
                                We strive to create genuine connections between our visitors and local communities, promoting responsible and sustainable tourism that benefits both travelers and residents.
                            </>
                        ) : (
                            <>
                                En Best Tours in Kyoto, Osaka and Nara, creemos en ofrecer experiencias de viaje únicas y personalizadas. Nuestra misión es mostrar la belleza y la cultura de Japón a través de los ojos de un local, permitiendo a nuestros clientes sumergirse completamente en la rica historia y las tradiciones de estas fascinantes ciudades.
                                <br />
                                <br />
                                Nos esforzamos por crear conexiones genuinas entre nuestros visitantes y las comunidades locales, promoviendo un turismo responsable y sostenible que beneficie tanto a los viajeros como a los residentes.
                            </>
                        )}
                    </Typography>

                </Grid>
                <Grid
                    size={12}

                >

                    <Typography sx={{ fontWeight: '600', fontSize: '1.5rem', lineHeight: '2rem', marginBottom: '1rem' }}>
                        {lang === 'en' ? 'Our Guide' : 'Nuestro Guía'}
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
                            {lang === 'en' ? 'Guide´s name' : 'Nombre del guia'}
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
                                    With over 10 years of experience living and working in Japan, our lead guide is passionate about Japanese culture and an expert in the history and traditions of Kyoto, Osaka, and Nara. Their deep knowledge and love for these cities shine through in every tour they design and lead.
                                    <br />
                                    <br />
                                    In addition to their expertise in tourism, our guide is an avid photographer and a local cuisine enthusiast, adding a unique dimension to our tours. This allows visitors to capture unforgettable moments and uncover the culinary secrets of the region.
                                </>
                            ) : (
                                <>
                                    Con más de 10 años de experiencia viviendo y trabajando en Japón, nuestro guía principal es un apasionado de la cultura japonesa y un experto en la historia y las tradiciones de Kyoto, Osaka y Nara. Su profundo conocimiento y amor por estas ciudades se reflejan en cada tour que diseña y conduce.
                                    <br />
                                    <br />
                                    Además de su experiencia en turismo, nuestro guía es un ávido fotógrafo y un entusiasta de la gastronomía local, lo que añade una dimensión única a nuestros tours, permitiendo a los visitantes capturar momentos inolvidables y descubrir los secretos culinarios de la región.
                                </>
                            )}
                        </Typography>

                    </Grid>
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
