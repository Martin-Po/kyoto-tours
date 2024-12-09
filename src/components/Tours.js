import { Box, Button, Card, CardContent, CardMedia, FormControl, Grid2 as Grid, IconButton, InputLabel, ListItem, Menu, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useLang } from "./utils/LangProvider";
import { ToursData } from "../data";
import { useEffect, useState, useRef } from "react";
import { Helmet } from 'react-helmet';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { AddchartOutlined } from "@mui/icons-material";





const Tours = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState({ adults: 0, children: 0, guests: 0 })

    const [message, setMessage] = useState('')
    const [selectedTour, setSelectedTour] = useState([])
    const [peopleLabel, setPeopleLabel] = useState('Number of people')
    const [selectedPeople, setSelectedPeople] = useState({ adults: 0, children: 0, guests: 0 })
    const [priceOptions, setPriceOptions] = useState([])
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

    const theme = useTheme();



    const { lang } = useLang();

    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format


    const handleselectedTourChange = (event) => {
        const selectedTourName = event.target.value; // Get the selected tour's id
        const newSelectedTour = toursWithOptions.find(tour => tour.name === selectedTourName); // Find the full tour object using the id
        const newPrice = newSelectedTour.guests ? newSelectedTour.guests[0] : newSelectedTour.adults[0]
        const newSelectedPeople = newSelectedTour.guests ? { adults: 0, children: 0, guests: 1 } : { adults: 1, children: 0, guests: 0 }

        const newLabel = newPrice + " USD - " + (newSelectedTour.guests ? '1 Guest' : '1 Adult');

        setSelectedPeople(newSelectedPeople)
        setPeopleLabel(newLabel)
        setPrice(newPrice)
        setPriceOptions(newSelectedTour.price.map((price, index) => `${index + 1} - ${price}`))
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
                    newLabel = "1 Guest"
                }
                else {
                    newLabel = updatedPeople.guests + " Guests"
                    for (let index = 0; index < updatedPeople.guests; index++) {
                        newPrice += selectedTour.guests[index]
                    }

                }
            }
            else {

                if (updatedPeople.adults === 1) {
                    newPrice += selectedTour.adults[0]
                    adultLabel = "1 Adult"
                }
                else {
                    adultLabel = updatedPeople.adults + " adults"
                    for (let index = 0; index < updatedPeople.adults; index++) {
                        newPrice += selectedTour.adults[index]
                    }
                }

                if (updatedPeople.children === 1) {
                    newPrice += selectedTour.children[0]
                    childrenLabel = "1 Child"
                }
                else {
                    childrenLabel = updatedPeople.children + " children"
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


    const baseUrl = window.location.origin; // Esto obtiene el dominio base (ej. https://kyoto-tours.vercel.app)
    const esUrl = `${baseUrl}/es/tours`; // URL para la versión en español de la página home
    const enUrl = `${baseUrl}/en/tours`; // URL para la versión en inglés de la página home
    const canonicalUrl = lang === 'en' ? enUrl : esUrl; // Set the canonical URL for the current language

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


    return (
        <div style={{ width: '100vw', maxWidth: '100%' }}>
            <Helmet htmlAttributes={{ lang: lang, }}  >
                <link rel="alternate" href={enUrl} hreflang="en" />
                <link rel="alternate" href={esUrl} hreflang="es" />
                <link rel="alternate" href={baseUrl} hreflang="x-default" />
                {/* Canonical tag */}
                <link rel="canonical" href={canonicalUrl} />
                <title>{lang === 'en'
                    ? 'Explore Our Tours | Kyoto, Osaka & Nara Adventures - Best of Kyoto'
                    : 'Explora Nuestros Tours | Aventuras en Kyoto, Osaka y Nara - Best of Kyoto'}</title>
                <meta name='description' content={lang === 'en'
                    ? 'Choose from a variety of guided tours in Kyoto, Osaka, and Nara. Tailored itineraries for families, couples, and solo travelers.'
                    : 'Elige entre una variedad de tours guiados en Kyoto, Osaka y Nara. Itinerarios personalizados para familias, parejas y viajeros individuales.'} />
                {/* Open Graph Tags */}
                <meta property="og:title"
                    content={
                        lang === 'en'
                            ? 'Explore Our Tours | Kyoto, Osaka & Nara Adventures - Best of Kyoto'
                            : 'Explora Nuestros Tours | Aventuras en Kyoto, Osaka y Nara - Best of Kyoto'
                    }
                />
                <meta property="og:description"
                    content={
                        lang === 'en'
                            ? 'Choose from a variety of guided tours in Kyoto, Osaka, and Nara. Tailored itineraries for families, couples, and solo travelers.'
                            : 'Elige entre una variedad de tours guiados en Kyoto, Osaka y Nara. Itinerarios personalizados para familias, parejas y viajeros individuales.'
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
                        {lang === 'en' ? 'Our Tours' : 'Nuestros Tours'}
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
                                From gardens and parks to monuments and landmarks, urban modern spaces to traditional quarters and hidden streets, main markets to not very visible shops…we try to offer as more variety as possible in our tours. Specially in Kyoto
                                <br />
                                There are itineraries for all the tours but they are flexible in the sense that new places to visit can be added and others removed in accordance to the requests of the travellers
                                <br />
                                We move usually in public transportation to feel a bit the vibes of the city and mainly for its remarkable efficiency, however in case you prefer taxi or private transportation we can cover that demand
                                <br />
                                Our Tours are mainly in English and Spanish but in case you prefer in other language make as know and maybe we could find a solution for that
                                <br />
                                Keep in mind that as you will have our contact and you can feel free to write or call  without charge after the tour in case you need any recommendation or assistance of any kind, we will take care of you😌
                            </>
                        ) : (
                            <>
                                Desde jardines y parques hasta monumentos y lugares emblemáticos, espacios urbanos modernos hasta barrios tradicionales y calles ocultas, mercados principales hasta tiendas poco visibles… tratamos de ofrecer la mayor variedad posible en nuestros tours. Especialmente en Kioto.
                                <br />
                                Hay itinerarios para todos los tours, pero son flexibles en el sentido de que se pueden agregar nuevos lugares para visitar y eliminar otros según las solicitudes de los viajeros.
                                <br />
                                Usualmente nos movemos en transporte público para sentir un poco las vibras de la ciudad y, principalmente, por su notable eficiencia. Sin embargo, en caso de que prefieras taxi o transporte privado, podemos cubrir esa demanda.
                                <br />
                                Nuestros tours son principalmente en inglés y español, pero si prefieres otro idioma, háznoslo saber y quizá podamos encontrar una solución para ello.
                                <br />
                                Ten en cuenta que tendrás nuestro contacto, por lo que puedes escribir o llamar sin cargo después del tour en caso de que necesites alguna recomendación o asistencia de cualquier tipo. Nos encargaremos de ti. 😌
                            </>
                        )}
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
                                    <TextField
                                        label={lang === 'en' ? "Name" : 'Nombre'}
                                        fullWidth
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        sx={{ backgroundColor: 'white' }}
                                    />
                                    <TextField
                                        label="Email"
                                        fullWidth
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        sx={{ backgroundColor: 'white' }}

                                    />

                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    gap: '1.5rem',
                                    alignItems: 'stretch', // Ensures all children have the same height
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    marginBottom: '1.5rem',
                                }}>
                                    <FormControl fullWidth>


                                        <InputLabel id="demo-simple-select-autowidth-label">Tour</InputLabel>
                                        <Select
                                            sx={{ justifyContent: 'space-around', backgroundColor: 'white' }}
                                            labelId="Tour"
                                            id="Tour-select"
                                            value={selectedTour?.name || ""}
                                            onChange={handleselectedTourChange}
                                            label="Tour"
                                            fullWidth
                                        >
                                            {toursWithOptions.map((tour, index) => (
                                                <MenuItem value={tour.name} key={index}>
                                                    {tour.name} {/* Display the name */}
                                                </MenuItem>
                                            ))}
                                        </Select>
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
                                                   height:'56px',
                                                   paddingLeft:'10px',
                                                   paddingRight:'10px'
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

                                                        Guests
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
                                                    <MenuItem sx={{
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
                                                        Adults
                                                        <IconButton color="black"
                                                            onClick={() => handleselectedPeople("adults", +1)}
                                                        >

                                                            <AddCircleOutlineIcon
                                                                sx={{ pointerEvents: 'auto', cursor: 'pointer' }} // Enable pointer events for the icon
                                                            />
                                                        </IconButton>
                                                    </MenuItem>,
                                                    <MenuItem sx={{
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
                                                        Children
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
                                        {/* <InputLabel id="People">Number of people</InputLabel>
                                        <Select
                                            sx={{ justifyContent: 'space-around', backgroundColor: 'white' }}
                                            disabled={selectedTour.length === 0}
                                            labelId="People"
                                            id="People-select"
                                            value={selectedPeople || ""}
                                            onChange={handleselectedPeopleChange} label="People"
                                            fullWidth

                                        >
                                            {priceOptions.map((price, index) => (
                                                <MenuItem value={price} key={index}>
                                                    {price}
                                                </MenuItem>
                                            ))}
                                        </Select> */}
                                    </FormControl>


                                    <TextField

                                        sx={{ backgroundColor: 'white', }}
                                        label="Tour date"
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true, // Ensures the label stays above the input
                                        }}
                                        inputProps={{
                                            min: today, // Sets the minimum date to today
                                        }}

                                        variant="outlined"
                                    />
                                </Box>

                                <TextField
                                    label={lang === 'en' ? "Message" : 'Mensaje'}

                                    fullWidth
                                    multiline
                                    rows={4}
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    sx={{ marginBottom: '1.5rem', backgroundColor: 'white' }}

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
                                    {lang === 'en' ? 'Send message' : 'Enviar mensaje'}
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


    return (
        <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 3, }}
            display="flex"
            justifyContent="center"
        >
            <Card sx={{ position: 'relative' }}>
                {(tour.type === 'Private Tour' || tour.type === 'Tour Privado') &&
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
                        {lang === 'en' ? 'Location: ' : 'Ubicacion: '}
                        {tour.location}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '1rem', marginBottom: '0.25rem' }}>
                        {lang === 'en' ? 'Meeting place: ' : 'Punto de encuentro: '}
                        {tour.meeting_place}
                    </Typography>
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

                    <Typography sx={{ color: 'text.secondary', fontSize: '1rem', marginBottom: '0.25rem' }}>
                        {lang === 'en' ? 'Duration: ' : 'Duración: '}
                        {tour.options.filter(option => option.duration_type === selectedType)[0]?.duration}
                    </Typography>

                    <Typography sx={{ color: 'text.secondary', fontSize: '1rem', marginBottom: '0.25rem' }}>
                        {lang === 'en' ? 'Price: From ' : 'Precio: Desde '}
                        {tour.options.filter(option => option.duration_type === selectedType)[0]?.guests
                            ? tour.options.filter(option => option.duration_type === selectedType)[0]?.guests[0]
                            : tour.options.filter(option => option.duration_type === selectedType)[0]?.adults[0]}
                        {" USD"}
                    </Typography>

                    <Typography sx={{ color: 'text.secondary', fontSize: '1rem', marginBottom: '0.25rem' }}>
                        {lang === 'en' ? 'Capacity: Up to ' : 'Capacidad: Hasta '}
                        {tour.options.filter(option => option.duration_type === selectedType)[0]?.capacity}
                        {lang === 'en' ? ' people' : ' personas'}
                    </Typography>

                    <Typography sx={{ fontWeight: '600' }}>
                        {lang === 'en' ? 'Inclusions: ' : 'Incluye: '}
                    </Typography>
                    {tour.inclusions.map((inclusion, index) => {
                        return (
                            <li key={index} style={{ color: theme.palette.text.secondary }}>{inclusion}</li>
                        )
                    })}
                    <Typography sx={{ fontWeight: '600' }}>
                        {lang === 'en' ? 'Exclusions: ' : 'No incluye: '}
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
