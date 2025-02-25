import { Box, Button, Divider, FormControl, Grid2 as Grid, TextField, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useLang } from "./utils/LangProvider";
import { Helmet } from 'react-helmet';
import { metaTexts } from '../metaTextData';
import { SeoHelmet } from './utils/SeoHelmet';

const Contactenos = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});


    const { lang } = useLang();
    const previousLang = useRef(lang);
    const previousErrors = useRef(errors);


    useEffect(() => {
        if (previousLang.current !== lang && Object.keys(previousErrors.current).length !== 0) {
            validateForm();
            previousLang.current = lang; // Actualizar el valor anterior
        }
    }, [lang])

    useEffect(() => {
        previousErrors.current = errors; // Sync ref with latest errors
    }, [errors]);

    const contactUsText = {
        en: {
            title: "Contact Us",
            formLabels: {
                name: "Name",
                email: "Email",
                message: "Message",
                buttonText: "SEND MESSAGE",
                nameError: "You must enter a name",
                emailError: "You must enter an email",
                emailFormatError: "You must enter a valid email",
                messageError: "You must enter a message",

            },
            contactInfo: "Contact Information",
            phone: "Phone",
        },
        es: {
            title: "Contáctenos",
            formLabels: {
                name: "Nombre",
                email: "Email",
                message: "Mensaje",
                buttonText: "ENVIAR MENSAJE",
                nameError: "Debe ingresar un nombre",
                emailError: "Debe ingresar un mail",
                emailFormatError: "Debe ingresar un mail válido",
                messageError: "Debe ingresar un mensaje",
            },
            contactInfo: "Información de Contacto",
            phone: "Teléfono",
        },
        it: {
            title: "Contattaci",
            formLabels: {
                name: "Nome",
                email: "Email",
                message: "Messaggio",
                buttonText: "INVIA",
                nameError: "Devi inserire un nome",
                emailError: "Devi inserire un'email",
                emailFormatError: "Devi inserire un'email valida",
                messageError: "Devi inserire un messaggio",
            },
            contactInfo: "Informazioni di contatto",
            phone: "Telefono",
        },
        fr: {
            title: "Contactez-nous",
            formLabels: {
                name: "Nom",
                email: "Email",
                message: "Message",
                buttonText: "ENVOYER",
                nameError: "Vous devez entrer un nom",
                emailError: "Vous devez entrer un e-mail",
                emailFormatError: "Vous devez entrer un e-mail valide",
                messageError: "Vous devez entrer un message",

            },
            contactInfo: "Informations de contact",
            phone: "Téléphone",
        },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    const validateForm = () => {
        let newErrors = {};

        if (!formData.name) newErrors.name = contactUsText[lang].formLabels.nameError;
        if (!formData.message) newErrors.message = contactUsText[lang].formLabels.messageError;
        if (!formData.email) {
            newErrors.email = contactUsText[lang].formLabels.emailError;
        } else {
            const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!mailRegex.test(formData.email)) newErrors.email = contactUsText[lang].formLabels.emailFormatError;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSendMail = () => {
        if (validateForm()) {

        };
    }

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
                            onChange={handleChange}
                            name='name'
                            value={formData.name}
                            sx={{ marginBottom: '1.5rem' }}
                            error={!!errors.name}
                            helperText={errors.name}
                        />
                        <TextField
                            label={contactUsText[lang].formLabels.email}
                            fullWidth
                            name='email'
                            onChange={handleChange}
                            value={formData.email}
                            sx={{ marginBottom: '1.5rem' }}
                            error={!!errors.email}
                            helperText={errors.email}

                        />
                        <TextField
                            label={contactUsText[lang].formLabels.message}
                            name='message'
                            fullWidth
                            multiline
                            rows={4}
                            onChange={handleChange}
                            value={formData.message}
                            sx={{ marginBottom: '1.5rem' }}
                            error={!!errors.message}
                            helperText={errors.message}

                        />

                    </Box>
                    <Button
                        variant="contained"
                        onClick={handleSendMail}

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
                        <Typography color='primary.main'>
                            <a
                                href="mailto:info@besttoursinkyoto.com"
                                style={{ color: 'black', textDecoration: 'none' }}
                            >
                                info@besttoursinkyoto.com
                            </a>
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

                        <Typography fontWeight="bold">{contactUsText[lang].phone}</Typography>
                        <Typography color='primary.main'>
                            <a
                                href="https://wa.me/818049148380"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'primary.main', textDecoration: 'none' }}
                            >
                                +81 80-4914-8380
                            </a>
                        </Typography>


                    </Box>

                </Grid>

            </Grid>
        </div>
    )
}

export { Contactenos }
