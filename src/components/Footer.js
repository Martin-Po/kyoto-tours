import { Box, Divider, Grid2 as Grid, Typography } from '@mui/material'
import { RedSocial } from './Contactos'
import { Link } from 'react-router-dom'
import { Navegacion } from '../data'
import { useLang } from './utils/LangProvider';
import { Mail, Phone } from '@mui/icons-material';






function Footer() {
    const { lang } = useLang();
    return (
        <Box
            sx={{
                marginTop: 'auto',
                backgroundColor: 'primary.main',
                width: '100%',
            }}
        >
            <Grid
                container
                sx={{
                    margin: '25px auto 0 auto',
                    width: '1280px',
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'flex-start',
                    paddingLeft: '1.5rem',
                    paddingRight: '1.5rem',
                    columnGap:'1.5rem',


                    '@media (max-width: 1300px)': {
                        width: '992px',
                    },
                    '@media (max-width:1024px)': {
                        width: '100%',
                    },
                }}
            >
                <Grid
                size={12}                   
                    sx={{
                        display:'flex',                        
                        justifyContent:'center',
                        gap:'1rem',
                        marginBottom:'1.5rem'
                    }}
                >

                    {Navegacion[lang].map((nav) => {
                        return (
                            <Link to={lang + nav.link} key={nav.id}  style={{ display:'flex', width: 'fit-content', textDecoration: 'none', color:'inherit' }} className="menu-link">
                            <Typography
                                sx={{
                                     color:'white'
                                }}
                            >
                                {nav.text}
                            </Typography>
                            </Link>
                        )
                    })}
                </Grid>
                <Grid
                     size={12}                   
                     sx={{
                         display:'flex',     
                         flexDirection:{xs:'column', sm:'row'},                   
                         justifyContent:'center',
                         alignItems:'center',
                         gap:'1rem'
                         
                     }}
                >
                    
                            <Typography
                        sx={{
                            display: 'flex',
                                    color:'white',
        
                                }}
                            >
                               <Mail/>  <a
                                href="mailto:info@besttoursinkyoto.com"
                                style={{ color: 'white', textDecoration: 'none' }}
                            >
                                info@besttoursdinkyoto.com
                            </a>
                            </Typography>                    
                    <Typography
                        sx={{display:'flex',
                            color:'white',
                        }}
                    >
                        <Phone/> <a
                                href="https://wa.me/818049148380"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'white', textDecoration: 'none' }}
                            >
                                +81 80-4914-8380
                            </a>
                    </Typography>
                </Grid>
                
            </Grid>
            <Box
                sx={{
                    margin: '25px auto 0 auto',
                    width: '1280px',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingBottom: '1rem',
                    paddingTop:'1rem',
                    borderTop:'1px solid',
                    borderColor:'rgb(239 68 68)',


                    '@media (max-width: 1300px)': {
                        width: '992px',
                    },
                    '@media (max-width:1024px)': {
                        width: '100%',
                    },
                }}
            >
                <Typography
                    variant="h2"
                    fontSize="1rem"
                    fontWeight="500"
                    opacity="0.85"
                    color='white'
                >
                    Hecho por Martin Ponce
                </Typography>
            </Box>

        </Box>
    )
}

export default Footer
