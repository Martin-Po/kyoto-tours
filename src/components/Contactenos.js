import { Box, Button, Divider, FormControl, Grid2 as Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useLang } from "./utils/LangProvider";
import { Helmet } from 'react-helmet';

const Contactenos = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const { lang } = useLang();
    const baseUrl = window.location.origin; // Esto obtiene el dominio base (ej. https://kyoto-tours.vercel.app)
    const esUrl = `${baseUrl}/es/contact`; // URL para la versión en español de la página home
    const enUrl = `${baseUrl}/en/contact`; // URL para la versión en inglés de la página home
    const canonicalUrl = lang === 'en' ? enUrl : esUrl; // Set the canonical URL for the current language


    const contactUsText = { 
    en: {
        title: "Discover Kyoto, Osaka and Nara",
        formLabels:{
            name:"Name",
            email:"Email",
            message:"Message",
            buttonText:"SEND MESSAGE"            
        },
        contactInfo:"Contact Information",
        phone:"Phone",
    },
    es: {
        title: "Contáctenos",
        formLabels:{
            name:"Nombre",
            email:"Email",
            message:"Mensaje",
            buttonText:"ENVIAR MENSAJE"            
        },
        contactInfo:"Información de Contacto",
        phone:"Teléfono",
    },
    it: {
        title: "Contattaci",
        formLabels:{
            name:"Nome",
            email:"Email",
            message:"Messaggio",
            buttonText:"INVIA MESSAGGIO"            
        },
        contactInfo:"Informazioni di contatto",
        phone:"Telefono",
    },
    fr: {
        title: "Contactez-nous",
        formLabels:{
            name:"Nom",
            email:"Email",
            message:"Message",
            buttonText:"ENVOYER LE MESSAGE"            
        },
        contactInfo:"Informations de contact",
        phone:"Téléphone",
    },
    };

    return (
        <div style={{ width: '100vw', maxWidth: '100%' }}>
            <Helmet htmlAttributes={{lang: lang,}}  >
                <link rel="alternate" href={enUrl} hreflang="en" />
                <link rel="alternate" href={esUrl} hreflang="es" />
                <link rel="alternate" href={baseUrl} hreflang="x-default" />

                {/* Canonical tag */}
                <link rel="canonical" href={canonicalUrl} />

                <title>{lang === 'en'
                    ? 'Contact Us | Plan Your Dream Tour in Japan - Best of Kyoto'
                    : 'Contáctanos | Planifica el Tour de tus Sueños en Japón - Best of Kyoto'}</title>
                <meta name='description' content={lang === 'en'
                    ? 'Get in touch with us to book your personalized tour in Kyoto, Osaka, or Nara. We’re here to make your Japan travel dreams come true.'
                    : 'Ponte en contacto con nosotros para reservar tu tour personalizado en Kyoto, Osaka o Nara. Estamos aquí para hacer realidad tus sueños de viaje en Japón.'} />

                {/* Open Graph Tags */}
                <meta property="og:title"
                    content={
                        lang === 'en'
                            ? 'Contact Us | Plan Your Dream Tour in Japan - Best of Kyoto'
                            : 'Contáctanos | Planifica el Tour de tus Sueños en Japón - Best of Kyoto'
                    }
                />
                <meta property="og:description"
                    content={
                        lang === 'en'
                            ? 'Get in touch with us to book your personalized tour in Kyoto, Osaka, or Nara. We’re here to make your Japan travel dreams come true.'
                            : 'Ponte en contacto con nosotros para reservar tu tour personalizado en Kyoto, Osaka o Nara. Estamos aquí para hacer realidad tus sueños de viaje en Japón.'
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
                    <Typography sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: '1.875rem' }}>
                        {contactUsText[lang].title}
                    </Typography>

                </Grid>
                <Grid
                    size={{ xs: 12, sm: 6 }}

                >
                    <Box>
                        <TextField
                            label={contactUsText[lang].formLabels.name}
                            fullWidth
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            sx={{ marginBottom: '1.5rem' }}
                        />
                        <TextField
                            label={contactUsText[lang].formLabels.email}
                            fullWidth
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            sx={{ marginBottom: '1.5rem' }}

                        />
                        <TextField
                            label={contactUsText[lang].formLabels.message}

                            fullWidth
                            multiline
                            rows={4}
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            sx={{ marginBottom: '1.5rem' }}

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
                            {contactUsText[lang].formLabels.buttonText}
                        </Typography>
                    </Button>

                </Grid>

                <Grid
                    size={{ xs: 12, sm: 6 }}


                >
                    <Typography sx={{ fontWeight: '600', fontSize: '1.5rem', lineHeight: '2rem', marginBottom: '1rem' }}>
                        {contactUsText[lang].contactInfo}

                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: '0.5rem' }}>
                        <Typography fontWeight="bold">Email:</Typography>
                        <Typography color='primary.main'>info@besttoursinkyoto.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

                        <Typography fontWeight="bold">{contactUsText[lang].phone}</Typography>
                        <Typography color='primary.main'>+81 123-456-789</Typography>

                    </Box>

                </Grid>

            </Grid>
        </div>
    )
}

export { Contactenos }
