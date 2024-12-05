import { Box, Paper, Typography } from "@mui/material"
import { FAQData } from "../data"
import { useLang } from "./utils/LangProvider";
import { Helmet } from 'react-helmet';

const FAQs = () => {
    const { lang } = useLang();
    const baseUrl = window.location.origin; // Esto obtiene el dominio base (ej. https://kyoto-tours.vercel.app)
    const esUrl = `${baseUrl}/es/faqs`; // URL para la versión en español de la página home
    const enUrl = `${baseUrl}/en/faqs`; // URL para la versión en inglés de la página home
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
                    ? 'FAQs | Your Questions About Our Japan Tours Answered - Best of Kyoto'
                    : 'Preguntas Frecuentes | Resuelve tus Dudas sobre Nuestros Tours - Best of Kyoto'}</title>
                <meta name='description' content={lang === 'en'
                    ? 'Find answers to frequently asked questions about our Kyoto, Osaka, and Nara tours, including booking and cancellation policies.'
                    : 'Encuentra respuestas a las preguntas frecuentes sobre nuestros tours en Kyoto, Osaka y Nara, incluyendo reservas y cancelaciones.'} />

                {/* Open Graph Tags */}
                <meta property="og:title"
                    content={
                        lang === 'en'
                            ? 'FAQs | Your Questions About Our Japan Tours Answered - Best of Kyoto'
                            : 'Preguntas Frecuentes | Resuelve tus Dudas sobre Nuestros Tours - Best of Kyoto'
                    }
                />
                <meta property="og:description"
                    content={
                        lang === 'en'
                            ? 'Find answers to frequently asked questions about our Kyoto, Osaka, and Nara tours, including booking and cancellation policies.'
                            : 'Encuentra respuestas a las preguntas frecuentes sobre nuestros tours en Kyoto, Osaka y Nara, incluyendo reservas y cancelaciones.'
                    }
                />
                <meta property="og:image" content="%PUBLIC_URL%/images/logo_light.webp" />
                <meta property="og:type" content="website" />
            </Helmet>
            <Box sx={{
                flexDirection: 'column',
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
            }}>
                <Typography sx={{
                    color: 'primary.main',
                    fontSize: '2.25rem',
                    fontWeight: 700,
                    lineHeight: '2.5rem',
                    marginBottom: '2rem',
                    textAlign: 'center'

                }}>
                    {lang === 'en' ? 'FAQs' : 'Preguntas Frecuentes'}
                </Typography>

                {FAQData[lang].map((faq, index) => {
                    return (
                        <Paper 
                        key={index}
                        sx={{
                            width: '100%',
                            maxWidth: '720px',
                            backgroundColor: 'secondary.light',
                            marginBottom: '1rem',
                            padding: '1.5rem'
                        }}>
                            <Typography sx={{
                                color: 'primary.main',
                                fontWeight: 'bold',
                                fontSize: '1.25rem',
                                marginBottom: '0.5rem',
                                lineHeight: '1.75rem'
                            }}>
                                {faq.question}
                            </Typography>
                            <Typography sx={{ color: 'rgb(55 65 81)' }}>
                                {faq.answer}
                            </Typography>

                        </Paper>
                    )
                })}


            </Box>
        </div>
    )
}

export { FAQs }