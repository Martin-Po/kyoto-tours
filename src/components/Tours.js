import { Box, Button, Card, CardContent, CardMedia, FormControl, Grid2 as Grid, InputLabel, ListItem, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useLang } from "./utils/LangProvider";
import { ToursData, ToursImages } from "../data";
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { useTheme } from '@mui/material/styles';




const Tours = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState('')
    const [message, setMessage] = useState('')
    const [selectedTour, setSelectedTour] = useState([])
    const [selectedPeople, setSelectedPeople] = useState()
    const [priceOptions, setPriceOptions] = useState([])

    const [date, setDate] = useState('');

    const theme = useTheme();



    const { lang } = useLang();

    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format


    const handleselectedTourChange = (event) => {
        setSelectedPeople('')
        const selectedTourName = event.target.value; // Get the selected tour's id
        const newSelectedTour = toursWithOptions.find(tour => tour.name === selectedTourName); // Find the full tour object using the id

        setPriceOptions(newSelectedTour.price.map((price, index) => `${index + 1} - ${price}`))
        setSelectedTour(newSelectedTour)
    }

    const handleselectedPeopleChange = (event) => {


        // Update state or perform actions as needed
        setSelectedPeople(event.target.value);
    };

    const baseUrl = window.location.origin; // Esto obtiene el dominio base (ej. https://kyoto-tours.vercel.app)
    const esUrl = `${baseUrl}/es/tours`; // URL para la versión en español de la página home
    const enUrl = `${baseUrl}/en/tours`; // URL para la versión en inglés de la página home
    const canonicalUrl = lang === 'en' ? enUrl : esUrl; // Set the canonical URL for the current language

    const toursWithOptions = ToursData[lang].flatMap((tour, index) => {
        // Start by getting the base ID (e.g., 1 for the first tour)

        return tour.options.map(option => ({
            name: `${tour.name} - ${option.duration_type}`,
            price: option.price,
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
                                <Box sx={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexDirection: { xs: 'column', sm: 'row' }, marginBottom: '1.5rem' }}>
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
                                        <InputLabel id="People">Number of people</InputLabel>
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
                                        </Select>
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
            <Grid
                container
                margin="50px auto 40px auto"
                columnSpacing={{ xs: '0.15rem', sm: '1rem' }}
                rowSpacing={{ xs: '0.15rem', sm: '1rem' }}


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
                {ToursImages.map(image => {
                    return (
                        <Grid
                            key={image.id}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            size={{ xs: 4, md: 3, }}
                        >
                            <style>
                                {`
                    .responsive-img {
                        border-radius: 15px;
                        width: 350px;
                        max-width: 100%;
                        aspect-ratio: 1 / 1;
                    }

                    @media (max-width: 768px) {
                        .responsive-img {
                            border-radius: 0;
                        }
                    }
                `}
                            </style>
                            <img
                                className="responsive-img"
                                loading="lazy"
                                src={image.url}
                                alt="Testimonial"
                            />
                        </Grid>

                    )
                }
                )}
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
                        aspectRatio: 1 / 1
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
                        {lang === 'en' ? 'Price: ' : 'Precio: '}
                        {tour.options.filter(option => option.duration_type === selectedType)[0]?.price[0]}
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
