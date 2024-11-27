import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 1024,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: 'rgb(220 38 38 )',
            light: 'white',
            dark: 'rgba(0, 0, 0, 0.38)',
            selected: 'rgb(185 28 28)'
        },
        secondary: {
            main: 'rgb(254, 249, 195)',

            dark: '#1976d2'
        },
        status: {
            ok: '#4caf50'
        }
    },
    typography: {
        "fontFamily": "Outfit, sans-serif",
        "color": 'rgb(68 86 108)'
    }
    ,
    paperCustom: {
        padding: "2rem",
        fontFamily: "roboto",
        margin: "2rem",
        minHeight: window.innerHeight,
        borderRadius: 0
    },
    typographyCustom: {
        marginBottom: "1rem"
    },
    dividerCustom: {
        marginTop: "2rem"
    }

});

export { theme }