import { Grid2 as Grid, Typography } from "@mui/material"
import { useLang } from "./utils/LangProvider";
import { Gallery } from "./utils/Gallery";
import { GalleryImages } from "../data";



const PhotoGallery = () => {
    const { lang } = useLang();


    return (
        <>
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
                    <Typography
                        sx={{
                            fontSize: '1.125rem',
                            lineHeight: '1.75rem',
                        }}
                    >
                        {lang === 'en' ? (
                            <>
                                " Let’s meet up and have fun together visiting the most beautiful and interesting places on this side Japan "
                            </>
                        ) : (
                            <>
                                " ¡Reunámonos y divirtámonos juntos visitando los lugares más hermosos e interesantes de este lado de Japón! "                            
                            </>
                        )}
                    </Typography>
                </Grid>
            </Grid>
            <Gallery  images={GalleryImages}/>
        </>

    )

}

export { PhotoGallery }