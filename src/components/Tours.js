import { Box, Button, Card, CardContent, CardMedia, FormControl, FormHelperText, Grid2 as Grid, IconButton, InputLabel, ListItem, Menu, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useLang } from "./utils/LangProvider";
import { ToursData } from "../data";
import { useEffect, useState, useRef } from "react";
import { Helmet } from 'react-helmet';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { metaTexts } from "../metaTextData";
import { SeoHelmet } from "./utils/SeoHelmet";





const Tours = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [message, setMessage] = useState('')
    const [selectedTour, setSelectedTour] = useState([])
    const [peopleLabel, setPeopleLabel] = useState('')
    const [selectedPeople, setSelectedPeople] = useState({ adults: 0, children: 0, guests: 0 })
    const [price, setPrice] = useState(0)


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const buttonRef = useRef(null);

    const [date, setDate] = useState('');

    const [errors, setErrors] = useState({});


    const theme = useTheme();



    const { lang } = useLang();
    const previousLang = useRef(lang);
    const previousErrors = useRef(errors);

    useEffect(() => {
        setPeopleLabel(toursText[lang].contactForm.people.label)
        setSelectedTour([])
        setSelectedPeople({ adults: 0, children: 0, guests: 0 })
        if (previousLang.current !== lang && Object.keys(previousErrors.current).length !== 0) {
            validateForm();
            previousLang.current = lang; // Actualizar el valor anterior
        }
    }, [lang])

    useEffect(() => {
        previousErrors.current = errors; // Sync ref with latest errors
    }, [errors]);


    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format


    const handleselectedTourChange = (event) => {
        const selectedTourName = event.target.value; // Get the selected tour's id
        const newSelectedTour = toursWithOptions.find(tour => tour.name === selectedTourName); // Find the full tour object using the id
        const newPrice = newSelectedTour.guests ? newSelectedTour.guests[0] : newSelectedTour.adults[0]
        const newSelectedPeople = newSelectedTour.guests ? { adults: 0, children: 0, guests: 1 } : { adults: 1, children: 0, guests: 0 }

        const getLabelText = (lang, type) => {
            switch (lang) {
                case 'en':
                    return type === 'guests' ? '1 Guest' : '1 Adult';
                case 'es':
                    return type === 'guests' ? '1 Invitado' : '1 Adulto';
                case 'fr':
                    return type === 'guests' ? '1 Invité' : '1 Adulte';
                case 'it':
                    return type === 'guests' ? '1 Ospite' : '1 Adulto';
                default:
                    return type === 'guests' ? '1 Guest' : '1 Adult'; // Fallback to English
            }
        };

        const newLabel = `${newPrice} USD - ${getLabelText(lang, newSelectedTour.guests ? 'guests' : 'adults')}`;

        setSelectedPeople(newSelectedPeople)
        setPeopleLabel(newLabel)
        setPrice(newPrice)
        setSelectedTour(newSelectedTour)
    }

    const handleselectedPeople = (type, value) => {
        // Create a shallow copy of the current state
        const updatedPeople = { ...selectedPeople };

        const tourCapacity = selectedTour.capacity

        let newLabel = ''
        let adultLabel = ''
        let childrenLabel = ''
        let newPrice = 0

        let current_guests = updatedPeople.guests
        let current_adults = updatedPeople.adults
        let current_children = updatedPeople.children

        let update = false

        if (type === 'guests') {
            if ((current_guests + value > 0) && (current_guests + value <= tourCapacity))
                update = true
        }
        else {
            if ((type === 'adults' && ((current_adults + value > 0) && (current_adults + value <= tourCapacity))) || (type === 'children' && ((current_children + value >= 0) && (current_children + value <= tourCapacity))))

                if (((current_adults + current_children + value) <= tourCapacity))
                    update = true
        }


        if (update) {
            updatedPeople[type] = updatedPeople[type] + value
            if (type === 'guests') {
                if (updatedPeople.guests === 1) {
                    newPrice = selectedTour.guests[0]
                    const getGuestLabelText = (lang) => {
                        switch (lang) {
                            case 'en':
                                return '1 Guest';
                            case 'es':
                                return '1 Invitado';
                            case 'fr':
                                return '1 Invité';
                            case 'it':
                                return '1 Ospite';
                            default:
                                return '1 Guest'; // Fallback to English
                        }
                    };
                    newLabel = getGuestLabelText(lang);
                }
                else {
                    const getGuestsLabel = (lang) => {
                        switch (lang) {
                            case 'en':
                                return 'Guests';
                            case 'es':
                                return 'Invitados';
                            case 'fr':
                                return 'Invités';
                            case 'it':
                                return 'Ospiti';
                            default:
                                return 'Guests'; // Fallback to English
                        }
                    };
                    newLabel = updatedPeople.guests + ' ' + getGuestsLabel(lang);
                    for (let index = 0; index < updatedPeople.guests; index++) {
                        newPrice += selectedTour.guests[index]
                    }

                }
            }
            else {

                if (updatedPeople.adults === 1) {
                    newPrice += selectedTour.adults[0]
                    const getAdultLabel = (lang) => {
                        switch (lang) {
                            case 'en':
                                return '1 Adult';
                            case 'es':
                                return '1 Adulto';
                            case 'fr':
                                return '1 Adulte';
                            case 'it':
                                return '1 Adulto'; // "Adulto" is the same in Spanish and Italian
                            default:
                                return '1 Adult'; // Fallback to English
                        }
                    };

                    adultLabel = getAdultLabel(lang);
                }
                else {
                    const getAdultsLabel = (lang) => {
                        switch (lang) {
                            case 'en':
                                return ' Adults';
                            case 'es':
                                return ' Adultos';
                            case 'fr':
                                return ' Adultes';
                            case 'it':
                                return ' Adulti';
                            default:
                                return ' Adults'; // Fallback to English
                        }
                    };

                    adultLabel = updatedPeople.adults + getAdultsLabel(lang);
                    for (let index = 0; index < updatedPeople.adults; index++) {
                        newPrice += selectedTour.adults[index]
                    }
                }

                if (updatedPeople.children === 1) {
                    newPrice += selectedTour.children[0]
                    const getChildLabel = (lang) => {
                        switch (lang) {
                            case 'en':
                                return '1 Child';
                            case 'es':
                                return '1 Niño';
                            case 'fr':
                                return '1 Enfant';
                            case 'it':
                                return '1 Bambino';
                            default:
                                return '1 Child'; // Fallback to English
                        }
                    };

                    childrenLabel = getChildLabel(lang);
                }
                else {
                    const getChildrenLabel = (lang) => {
                        switch (lang) {
                            case 'en':
                                return ' Children';
                            case 'es':
                                return ' Niños';
                            case 'fr':
                                return ' Enfants';
                            case 'it':
                                return ' Bambini';
                            default:
                                return ' Children'; // Fallback to English
                        }
                    };

                    childrenLabel = updatedPeople.children + getChildrenLabel(lang);
                    for (let index = 0; index < updatedPeople.children; index++) {
                        newPrice += selectedTour.children[index]
                    }
                }


                if (updatedPeople.children === 0) {
                    newLabel = adultLabel
                }
                else {
                    newLabel = adultLabel + " + " + childrenLabel
                }
            }


            setPeopleLabel(newPrice + " USD - " + newLabel)
            setPrice(newPrice)
            setSelectedPeople(updatedPeople);
        }
    };

    const toursWithOptions = ToursData[lang].flatMap((tour, index) => {
        // Start by getting the base ID (e.g., 1 for the first tour)

        return tour.options.map(option => ({
            name: `${tour.name} - ${option.duration_type}`,
            capacity: option.capacity,
            price: option.price,
            adults: option?.adults,
            children: option?.children,
            guests: option?.guests
        }));

        // If no options, return just the base ID as a string
    });


    const toursText = {
        en: {
            title: "Our Tours",
            intro: {
                beggining: (
                    <>
                        From gardens and parks to monuments and landmarks, urban modern spaces to traditional quarters and hidden streets, main markets to not very visible shops…we try to offer as more variety as possible
                        <br />
                        There are itineraries for all the tours that we will share in detail after you contact us but they are flexible in the sense that new places to visit can be added and others removed in accordance to your interests and requests
                        <br />
                        We move usually in public transportation to feel more the vibes of the city, and mainly for its remarkable efficiency, however we can offer taxi or private transportation in case you prefer
                        <br />
                        We offer tours in English, Spanish, French and Italian language
                    </>
                ),
                endind: (
                    <>
                        Keep in mind that once you book a tour with us you can feel free to write or call us without any charge, before or after the tour, in case you need any recommendation or assistance of any kind while you are in Japan
                        <br />
                        We will take care of you😌
                    </>
                )
            },
            contactForm: {
                name: "Name",
                email: "Email",
                tour: "Tour",
                people: { label: "NUMBER OF PEOPLE", guests: "GUESTS", adults: "ADULTS", children: "CHILDREN" },
                date: "Tour date",
                message: "Message",
                nameError: "You must enter a name",
                emailError: "You must enter an email",
                emailFormatError: "You must enter a valid email",
                tourError: "You must select a tour",
                dateError: "You must select a date",
                messageError: "You must enter a message",
                formButton: "SEND MESSAGE"
            },
            wspMessage: {
                name: "Hello, my name is ",
                tour: "and I would like more information about the tour ",
                people: " for ",
                date: " for the day ",
                mail: "You can contact me at ",
            }
          
        },
        es: {
            title: "Nuestros Tours",
            intro: {
                beggining: (
                    <>
                        Desde jardines y parques hasta monumentos y lugares emblemáticos, espacios urbanos y modernos hasta barrios tradicionales y calles escondidas, mercados principales hasta tiendas poco visibles…Tratamos de ofrecer la mayor variedad posible en nuestros recorridos
                        <br />
                        Hay itinerarios para todos los tours que compartiremos en detalle una vez que nos contactes pero son flexibles en el sentido de que se pueden agregar nuevos lugares para visitar y dejar de lado otros de acuerdo con tus intereses y solicitudes
                        <br />
                        Normalmente nos movemos en transporte público para sentir más la cotidianidad de la ciudad, y principalmente por su notable eficiencia, sin embargo podemos ofrecer taxi o transporte privado en caso de que lo prefieras
                        <br />
                        Ofrecemos tours en español, ingles, italiano y francés
                    </>
                ),
                endind: (
                    <>
                        Ten en cuenta que una vez que reserves un tour con nosotros podrás escribirnos o llamarnos sin cargo alguno, antes o después del tour, en caso de que necesites alguna recomendación o asistencia de cualquier tipo mientras estés en Japón.
                        <br />
                        Vamos a cuidar de ti 😌
                    </>
                )
            },
            contactForm: {
                name: "Nombre",
                email: "Email",
                tour: "Tour",
                people: { label: "CANTIDAD DE PERSONAS", guests: "INVITADOS", adults: "ADULTOS", children: "NIÑOS" },
                date: "Fecha del tour",
                message: "Mensaje",
                formButton: "ENVIAR MENSAJE",
                nameError: "Debe ingresar un nombre",
                emailError: "Debe ingresar un mail",
                emailFormatError: "Debe ingresar un mail válido",
                tourError: "Debe seleccionar un tour",
                dateError: "Debe seleccionar una fecha",
                messageError: "Debe ingresar un mensaje",
            },
            wspMessage: {
                name: "Hola, mi nombre es ",
                tour: "y quisiera más información sobre el tour ",
                people: " para ",
                date: " para el día ",
                mail: "Me pueden contactar al ",
            }

        },
        it: {
            title: "I Nostri Tour",
            intro: {
                beggining: (
                    <>
                        Dai giardini e parchi ai monumenti e punti di riferimento, dagli spazi urbani moderni ai quartieri tradizionali e strade nascoste, dai mercati principali ai negozi meno visibili… cerchiamo di offrire la maggiore varietà possibile.
                        <br />
                        Ci sono itinerari per tutti i tour che condivideremo in dettaglio dopo che ci contatterai, ma sono flessibili nel senso che nuovi luoghi da visitare possono essere aggiunti e altri rimossi in base ai tuoi interessi e richieste.
                        <br />
                        Ci muoviamo solitamente con i mezzi pubblici per sentire meglio le vibrazioni della città, e principalmente per la sua notevole efficienza; tuttavia, possiamo offrire taxi o trasporti privati se preferisci.
                        <br />
                        Offriamo tour in inglese, spagnolo, francese e italiano
                    </>
                ),
                endind: (
                    <>
                        Tieni presente che una volta prenotato un tour con noi puoi scriverci o chiamarci gratuitamente, prima o dopo il tour, nel caso in cui avessi bisogno di consigli o assistenza di qualsiasi tipo mentre sei in Giappone.
                        <br />
                        Ci prenderemo cura di te 😌
                    </>
                )
            },
            contactForm: {
                name: "Nome",
                email: "Email",
                tour: "Tour",
                people: { label: "NUMERO DI PERSONE", guests: "Ospiti", adults: "Adulti", children: "Bambini" },
                date: "Data del tour",
                message: "Messaggio",
                formButton: "INVIA",
                nameError: "Devi inserire un nome",
                emailError: "Devi inserire un'email",
                emailFormatError: "Devi inserire un'email valida",
                tourError: "Devi selezionare un tour",
                dateError: "Devi selezionare una data",
                messageError: "Devi inserire un messaggio",
            },
            wspMessage: {
                name: "Ciao, mi chiamo ",
                tour: "e vorrei maggiori informazioni sul tour ",
                people: " per ",
                date: " per il giorno ",
                mail: "Potete contattarmi a ",
            }
        },
        fr: {
            title: "Nos Visites",
            intro: {
                beggining: (
                    <>
                        Des jardins et parcs aux monuments et sites emblématiques, des espaces urbains modernes aux quartiers traditionnels et ruelles cachées, des principaux marchés aux magasins moins visibles… nous essayons d'offrir autant de variété que possible.
                        <br />
                        Il existe des itinéraires pour toutes les visites que nous partagerons en détail après que vous nous contactiez, mais ils sont flexibles dans le sens où de nouveaux lieux à visiter peuvent être ajoutés et d'autres retirés en fonction de vos intérêts et demandes.
                        <br />
                        Nous nous déplacons généralement en transports en commun pour mieux ressentir l'ambiance de la ville, principalement en raison de son remarquable efficacité ; cependant, nous pouvons offrir un taxi ou un transport privé si vous préférez.
                        <br />
                        Nous proposons des visites en anglais, espagnol, français et italien
                    </>
                ),
                endind: (
                    <>
                        Veuillez noter qu'une fois que vous avez réservé un tour avec nous, vous pouvez nous écrire ou nous appeler gratuitement, avant ou après la             la tournée, au cas où vous auriez besoin de recommandations ou d'assistance de quelque nature que ce soit pendant votre séjour au Japon
                        <br />
                        Nous prendrons soin de vous 😌
                    </>
                )
            },
            contactForm: {
                name: "Nom",
                email: "Email",
                tour: "Tour",
                people: { label: "NOMBRE DE PERSONNES", guests: "Invités", adults: "Adultes", children: "Enfants" },
                date: "Date du tour",
                message: "Message",
                formButton: "ENVOYER",
                nameError: "Vous devez entrer un nom",
                emailError: "Vous devez entrer un e-mail",
                emailFormatError: "Vous devez entrer un e-mail valide",
                tourError: "Vous devez sélectionner un circuit",
                dateError: "Vous devez sélectionner une date",
                messageError: "Vous devez entrer un message",
            },
            wspMessage: {
                name: "Bonjour, je m'appelle ",
                tour: "et je voudrais plus d'informations sur le tour ",
                people: " pour ",
                date: " pour le jour ",
                mail: "Vous pouvez me contacter à ",
            }
        },
    };

    const validateForm = () => {
        let newErrors = {};

        console.log(toursText[lang].contactForm);

        if (!name) newErrors.name = toursText[lang].contactForm.nameError;
        // if (!message) newErrors.message = toursText[lang].contactForm.messageError;
        // if (!date) newErrors.date = toursText[lang].contactForm.dateError;

        // if (!email) {
        //     newErrors.email = toursText[lang].contactForm.emailError;
        // } else {
        //     const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //     if (!mailRegex.test(email)) newErrors.email = toursText[lang].contactForm.emailFormatError;
        // }
        if (!selectedTour.name) newErrors.selectedTour = toursText[lang].contactForm.tourError;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const generateWspMessage = () => {

        let wspMessage = ""

            let [year, month, day] = date.split("-")
            const dateMsg = `${day}/${month}/${year}`

            wspMessage += toursText[lang].wspMessage.name + name + " "
            wspMessage += toursText[lang].wspMessage.tour + " '" + selectedTour.name + "' "
            let peopleText = ""
            if (selectedPeople.guests !== 0) {
                peopleText = selectedPeople.guests + " " + toursText[lang].contactForm.people.guests
            }
            else {
                peopleText = selectedPeople.adults + " " + toursText[lang].contactForm.people.adults
                if (selectedPeople.children !== 0) {
                    peopleText += " + " + selectedPeople.children + " " + toursText[lang].contactForm.people.children
                }
            }
            wspMessage += toursText[lang].wspMessage.people + peopleText.toLocaleLowerCase()
            if (date) {wspMessage += toursText[lang].wspMessage.date + dateMsg + ". "}
            if (email) {wspMessage += toursText[lang].wspMessage.mail + email + ". "}
            if (message) {wspMessage += message}

            return wspMessage
    }

    const handleSendMail = () => {
        if (validateForm()) {
            

            const encodedMessage = encodeURIComponent(generateWspMessage());

            // Replace 'PHONE_NUMBER' with the target WhatsApp number
            const phoneNumber = "1234567890"; // example: "1234567890"
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
            // Redirect to the WhatsApp link
            window.open(whatsappURL, "_blank");
        };
    }

    return (
        <div style={{ width: '100vw', maxWidth: '100%' }}>
            <SeoHelmet lang={lang} page="tours" />
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
                        {toursText[lang].title}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '1.125rem',
                            lineHeight: '1.75rem',
                            marginBottom: '1rem',
                        }}
                    >
                        {toursText[lang].intro.beggining}
                        <span
                            style={{
                                fontWeight: '600',
                                fontSize: '1.3rem',
                                lineHeight: '2rem',
                            }}
                        >
                            {toursText[lang].intro.ending}
                        </span>
                    </Typography>

                </Grid>

                <Grid
                    container
                    columnSpacing={3}
                    rowSpacing={4}
                    sx={{
                        height: { xs: 'auto', }, // Adjusts height based on screen size
                    }}
                >
                    {ToursData[lang].map((tour, index) => (
                        <TourCard tour={tour} key={index} />

                    ))}

                    <Grid
                        container
                        sx={{ backgroundColor: 'secondary.main', width: '100%', padding: '1.5rem' }}
                    >

                        <Grid
                            size={{ xs: 12 }}

                        >
                            <Box sx={{ marginBottom: '1.5rem' }}>
                                <Box sx={{ display: 'flex', gap: '1.5rem', flexDirection: { xs: 'column', sm: 'row' }, marginBottom: '1.5rem', }}>
                                    <FormControl fullWidth error={!!errors.name}>
                                        <TextField
                                            label={toursText[lang].contactForm.name}
                                            fullWidth
                                            onChange={(e) => setName(e.target.value)}
                                            value={name}
                                            sx={{ backgroundColor: 'white' }}
                                            error={!!errors.name}
                                        />
                                        <FormHelperText >{errors.name}</FormHelperText>
                                    </FormControl>
                                    <FormControl fullWidth error={!!errors.email}>

                                        <TextField
                                            label={toursText[lang].contactForm.email}
                                            fullWidth
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                            sx={{ backgroundColor: 'white' }}
                                            error={!!errors.email}
                                        />
                                        <FormHelperText >{errors.email}</FormHelperText>

                                    </FormControl>


                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    gap: '1.5rem',
                                    alignItems: 'stretch', // Ensures all children have the same height
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    marginBottom: '1.5rem',
                                }}>
                                    <FormControl fullWidth error={!!errors.selectedTour}>


                                        <InputLabel id="demo-simple-select-autowidth-label">Tour</InputLabel>
                                        <Select
                                            sx={{ justifyContent: 'space-around', backgroundColor: 'white' }}
                                            labelId="Tour"
                                            id="Tour-select"
                                            value={selectedTour?.name || ""}
                                            onChange={handleselectedTourChange}
                                            label={toursText[lang].contactForm.tour}
                                            fullWidth
                                        >
                                            {toursWithOptions.map((tour, index) => (
                                                <MenuItem value={tour.name} key={index}>
                                                    {tour.name} {/* Display the name */}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        <FormHelperText >{errors.selectedTour}</FormHelperText>
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <Button
                                            ref={buttonRef}
                                            id="demo-customized-button"
                                            aria-controls={open ? 'demo-customized-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            variant="outlined"
                                            sx={{
                                                background: 'white',
                                                height: '100%', // Match container height
                                                color: 'black', // Text color
                                                borderColor: 'grey.500', // Initial border color
                                                display: 'flex', // Use flexbox for layout
                                                justifyContent: 'space-between', // Space between text and icon
                                                alignItems: 'center', // Center items vertically
                                                textAlign: 'center', // Center text content
                                                paddingRight: '16px', // Add space for the icon
                                                '&:hover': {
                                                    color: 'black', // Text color on hover
                                                    borderColor: 'black', // Border color on hover
                                                },
                                                '@media (max-width: 768px)': {
                                                    height: '56px',
                                                    paddingLeft: '10px',
                                                    paddingRight: '10px'
                                                },
                                            }}
                                            disabled={!selectedTour.name}
                                            disableElevation
                                            onClick={handleClick}
                                            endIcon={<KeyboardArrowDownIcon style={{ marginLeft: 'auto' }} />} // Ensure the icon is right-aligned
                                        >
                                            {peopleLabel}
                                        </Button>
                                        <Menu
                                            id="demo-customized-menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'demo-customized-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            sx={{
                                                '& .MuiPaper-root': {
                                                    minWidth: buttonRef.current ? `${buttonRef.current.offsetWidth}px` : 'auto',
                                                },
                                            }}
                                        >
                                            {selectedTour.guests
                                                ?
                                                (
                                                    <MenuItem
                                                        key={1}
                                                        sx={{
                                                            justifyContent: 'space-between',
                                                            pointerEvents: 'none', // Disable pointer events for the MenuItem
                                                            '&:hover': {
                                                                backgroundColor: 'transparent', // Prevent hover color change
                                                                cursor: 'default', // Prevent pointer cursor change
                                                            },
                                                        }}
                                                        disableRipple
                                                    >
                                                        <IconButton color="black"
                                                            onClick={() => handleselectedPeople("guests", -1)}
                                                        >

                                                            <RemoveCircleOutlineIcon
                                                                sx={{ pointerEvents: 'auto', cursor: 'pointer' }} // Enable pointer events for the icon
                                                            />
                                                        </IconButton>

                                                        {toursText[lang].contactForm.people.guests}
                                                        <IconButton color="black"
                                                            onClick={() => handleselectedPeople("guests", +1)}
                                                        >

                                                            <AddCircleOutlineIcon
                                                                sx={{ pointerEvents: 'auto', cursor: 'pointer' }} // Enable pointer events for the icon
                                                            />
                                                        </IconButton>
                                                    </MenuItem>
                                                )
                                                : [
                                                    <MenuItem
                                                        key={2}
                                                        sx={{
                                                            justifyContent: 'space-between',
                                                            pointerEvents: 'none', // Disable pointer events for the MenuItem
                                                            '&:hover': {
                                                                backgroundColor: 'transparent', // Prevent hover color change
                                                                cursor: 'default', // Prevent pointer cursor change
                                                            },
                                                        }}>
                                                        <IconButton color="black"
                                                            onClick={() => handleselectedPeople("adults", -1)}
                                                        >

                                                            <RemoveCircleOutlineIcon
                                                                sx={{ pointerEvents: 'auto', cursor: 'pointer' }} // Enable pointer events for the icon
                                                            />
                                                        </IconButton>
                                                        {toursText[lang].contactForm.people.adults}
                                                        <IconButton color="black"
                                                            onClick={() => handleselectedPeople("adults", +1)}
                                                        >

                                                            <AddCircleOutlineIcon
                                                                sx={{ pointerEvents: 'auto', cursor: 'pointer' }} // Enable pointer events for the icon
                                                            />
                                                        </IconButton>
                                                    </MenuItem>,
                                                    <MenuItem
                                                        key={3}
                                                        sx={{
                                                            justifyContent: 'space-between',
                                                            pointerEvents: 'none', // Disable pointer events for the MenuItem
                                                            '&:hover': {
                                                                backgroundColor: 'transparent', // Prevent hover color change
                                                                cursor: 'default', // Prevent pointer cursor change
                                                            },
                                                        }}>
                                                        <IconButton color="black"
                                                            onClick={() => handleselectedPeople("children", -1)}
                                                        >

                                                            <RemoveCircleOutlineIcon
                                                                sx={{ pointerEvents: 'auto', cursor: 'pointer' }} // Enable pointer events for the icon
                                                            />
                                                        </IconButton>
                                                        {toursText[lang].contactForm.people.children}
                                                        <IconButton color="black"
                                                            onClick={() => handleselectedPeople("children", +1)}
                                                        >

                                                            <AddCircleOutlineIcon
                                                                sx={{ pointerEvents: 'auto', cursor: 'pointer' }} // Enable pointer events for the icon
                                                            />
                                                        </IconButton>

                                                    </MenuItem>
                                                ]
                                            }
                                        </Menu>
                                    </FormControl>

                                    <FormControl fullWidth error={!!errors.date}>

                                        <TextField

                                            sx={{ backgroundColor: 'white', }}
                                            label={toursText[lang].contactForm.date}
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            fullWidth
                                            error={!!errors.date}
                                            InputLabelProps={{
                                                shrink: true, // Ensures the label stays above the input
                                            }}
                                            inputProps={{
                                                min: today, // Sets the minimum date to today
                                            }}

                                            variant="outlined"
                                        />
                                        <FormHelperText >{errors.date}</FormHelperText>

                                    </FormControl>

                                </Box>

                                <FormControl fullWidth error={!!errors.message}>

                                    <TextField
                                        label={toursText[lang].contactForm.message}

                                        fullWidth
                                        multiline
                                        rows={4}
                                        onChange={(e) => setMessage(e.target.value)}
                                        value={message}
                                        error={!!errors.message}
                                        sx={{ backgroundColor: 'white' }}


                                    />
                                    <FormHelperText >{errors.message}</FormHelperText>

                                </FormControl>

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
                                    {toursText[lang].contactForm.formButton}
                                </Typography>
                            </Button>

                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}

const TourCard = ({ tour, index }) => {
    const [selectedType, setSelectedType] = useState(tour.options[0].duration_type)

    const theme = useTheme();
    const { lang } = useLang();

    useEffect(() => {
        // Reset `selectedType` to the first option's duration_type when `lang` changes
        setSelectedType(tour.options[0].duration_type);
    }, [lang, tour.options]);

    const tourCardText = {
        en: {
            location: "Location: ",
            meeting_place: "Meeting place: ",
            duration: "Duration: ",
            price: "Price: From ",
            capacity: ["Capacity: Up to ", " people"],
            includes: "Inclusions",
            excludes: "Exclusions"

        },
        es: {
            location: "Ubicacion: ",
            meeting_place: "Punto de encuentro: ",
            duration: "Duración: ",
            price: "Precio: Desde ",
            capacity: ["Capacidad: Hasta ", " personas"],
            includes: "Incluye",
            excludes: "No incluye"

        },
        it: {
            location: "Luogo: ",
            meeting_place: "Luogo d'incontro: ",
            duration: "Durata: ",
            price: "Prezzo: da ",
            capacity: ["Capacità: Fino a ", " persone"],
            includes: "Inclusioni",
            excludes: "Esclusioni"
        },
        fr: {
            location: "Lieu : ",
            meeting_place: "Point de rencontre: ",
            duration: "Durée: ",
            price: "Prix: À partir de ",
            capacity: ["Capacité: Jusqu'à ", " personnes"],
            includes: "Inclusions",
            excludes: "Exclusions"
        },
    };


    return (
        <Grid
            key={index}
            size={lang === 'it' || lang === 'fr'
                ? { xs: 12, md: 4 }
                : { xs: 12, sm: 6, md: 3 }}
            display="flex"
            justifyContent="center"
        >
            <Card sx={{ position: 'relative' }}>
                {(tour.type === 'Private Tour' || tour.type === 'Tour Privado' || tour.type === 'Visite privée' || tour.type === 'Tour privato') &&
                    <Box
                        sx={{
                            position: 'absolute', // Ensure it's positioned relative to the card
                            top: 0, // Anchor to the top of the card
                            right: 0, // Anchor to the right of the card
                            backgroundColor: 'primary.main',
                            padding: '4px 8px', // Padding to ensure the box size fits the content
                            color: 'white',
                            fontSize: '0.75rem', // Adjust font size as needed
                            whiteSpace: 'nowrap', // Prevents text wrapping
                            fontWeight: 600
                        }}
                    >
                        {tour.type}
                    </Box>
                }

                <CardMedia
                    component="img"
                    sx={{
                        maxWidth: '445px',
                        maxHeight: '445px',
                        aspectRatio: 1 / 1,
                        '@media (max-width: 768px)': {
                            maxWidth: '100%',
                            maxHeight: '100%',
                            aspectRatio: 'unset', // Unset aspect ratio for screens smaller than 768px
                        },

                    }}
                    image={tour.image}
                    title={tour.name}
                />
                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: '600', fontSize: '1.25rem', lineHeight: '1.75rem' }}>
                        {tour.name}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '1rem', marginBottom: '0.25rem' }}>
                        {tourCardText[lang].location}
                        {tour.location}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '1rem', marginBottom: '0.25rem' }}>
                        {tourCardText[lang].meeting_place}
                        {tour.meeting_place}
                    </Typography>
                    {(tour.options.length > 1) &&
                        <Grid container gap="0.5rem" marginBottom="1rem">
                            {tour.options.map((option, index) => {
                                return (
                                    <Button
                                        key={index}
                                        variant="contained"
                                        size="small"
                                        sx={{
                                            backgroundColor: selectedType === option.duration_type ? 'primary.main' : 'grey.400',
                                            '&:hover': {
                                                backgroundColor: selectedType === option.duration_type ? 'primary.main' : 'grey.500',
                                            },
                                        }}
                                        onClick={() => setSelectedType(option.duration_type)}
                                    >
                                        <Typography sx={{ color: 'white', fontSize: '0.70rem' }}>
                                            {option.duration_type}
                                        </Typography>
                                    </Button>
                                )
                            })}
                        </Grid>

                    }

                    <Typography sx={{ color: 'text.secondary', fontSize: '1rem', marginBottom: '0.25rem' }}>
                        {tourCardText[lang].duration}
                        {tour.options.filter(option => option.duration_type === selectedType)[0]?.duration}
                    </Typography>

                    <Typography sx={{ color: 'text.secondary', fontSize: '1rem', marginBottom: '0.25rem' }}>
                        {tourCardText[lang].price}
                        {tour.options.filter(option => option.duration_type === selectedType)[0]?.guests
                            ? tour.options.filter(option => option.duration_type === selectedType)[0]?.guests[0]
                            : tour.options.filter(option => option.duration_type === selectedType)[0]?.adults[0]}
                        {" USD"}
                    </Typography>

                    <Typography sx={{ color: 'text.secondary', fontSize: '1rem', marginBottom: '0.25rem' }}>
                        {tourCardText[lang].capacity[0]}
                        {tour.options.filter(option => option.duration_type === selectedType)[0]?.capacity}
                        {tourCardText[lang].capacity[1]}
                    </Typography>

                    <Typography sx={{ fontWeight: '600' }}>
                        {tourCardText[lang].includes}
                    </Typography>
                    {tour.inclusions.map((inclusion, index) => {
                        return (
                            <li key={index} style={{ color: theme.palette.text.secondary }}>{inclusion}</li>
                        )
                    })}
                    <Typography sx={{ fontWeight: '600' }}>
                        {tourCardText[lang].excludes}
                    </Typography>
                    {tour.exclusions.map((exclusion, index) => {
                        return (
                            <li key={index} style={{ color: theme.palette.text.secondary }}>{exclusion}</li>
                        )
                    })}
                </CardContent>
            </Card>
        </Grid>
    )

}

export { Tours }
