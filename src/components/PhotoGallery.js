import { Grid2 as Grid, Typography } from "@mui/material"
import { useLang } from "./utils/LangProvider";
import { Gallery } from "./utils/Gallery";
import { GalleryImages } from "../data";
import { metaTexts } from "../metaTextData";

import JapanFlag from "../assets/japan-flag-waving-icon-16.png"
import { Helmet } from "react-helmet";
import { SeoHelmet } from "./utils/SeoHelmet";



const PhotoGallery = () => {

    const { lang } = useLang();

    const galleryText = {
        en: {
            title: (
                <span>
                    Let's meet up and have fun together visiting the most beautiful and interesting places on this side of Japan!
                    <img src={JapanFlag} alt="Japan Flag" style={{ width: '20px', height: 'auto', marginLeft: '5px' }} />
                    🌈🌱
                </span>
            ),
        },
        es: {
            title:
                (
                    <span>
                        Encontrémonos y divirtámonos juntos visitando los lugares más bellos e interesantes de este lado de Japón!
                        <img src={JapanFlag} alt="Japan Flag" style={{ width: '20px', height: 'auto', marginLeft: '5px' }} />
                        🌈🌱
                    </span>
                ),
        },
        it: {
            title:
                (
                    <span>
                        Incontriamoci e divertiamoci insieme visitando i luoghi più belli e interessanti di questa parte del Giappone!
                        <img src={JapanFlag} alt="Japan Flag" style={{ width: '20px', height: 'auto', marginLeft: '5px' }} />
                        🌈🌱
                    </span>
                ),
        },
        fr: {
            title:
                (
                    <span>
                        Rencontrons-nous et amusons-nous ensemble en visitant les endroits les plus beaux et les plus intéressants de ce côté du Japon!
                        <img src={JapanFlag} alt="Japan Flag" style={{ width: '20px', height: 'auto', marginLeft: '5px' }} />
                        🌈🌱
                    </span>
                ),
        },
    };


    return (
        <>
           <SeoHelmet lang={lang} page="gallery" />
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
                        {galleryText[lang].title}
                    </Typography>
                </Grid>
            </Grid>
            <Gallery images={GalleryImages} />
        </>

    )

}

export { PhotoGallery }