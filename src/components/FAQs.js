import { Box, Paper, Typography } from "@mui/material"
import { FAQData } from "../data"
import { useLang } from "./utils/LangProvider";

const FAQs = () => {
    const { lang } = useLang();
    console.log('en el faq');


    return (
        <div style={{ width: '100vw', maxWidth: '100%' }}>
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
                    textAlign:'center'
                    
                }}>
                    {lang === 'en' ? 'FAQs' : 'Preguntas Frecuentes'}
                </Typography>

                {FAQData[lang].map(faq => {
                    return (
                        <Paper sx={{
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