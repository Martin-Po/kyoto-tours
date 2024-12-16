import { Box, Button, Divider, FormControl, Grid2 as Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useLang } from "./utils/LangProvider";
import { Helmet } from 'react-helmet';
import { metaTexts } from '../metaTextData';
import { SeoHelmet } from './utils/SeoHelmet';

const Contactenos = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const { lang } = useLang();

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
            <SeoHelmet lang={lang} page="contact" />
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
