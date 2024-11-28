import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Logo from '../assets/logo_light.png'
import MenuIcon from '@mui/icons-material/Menu'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, Drawer, List, ListItem, Menu, MenuItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useLang } from './utils/LangProvider'
import { Navegacion} from '../data'


function ResponsiveAppBar() {
    const [anchorElLang, setAnchorElLang] = React.useState(null);
    const { lang, changeLanguage } = useLang();


    const handleLangMenu = (event) => {
        setAnchorElLang(event.currentTarget);
    };

    const handleLangClose = () => {
        setAnchorElLang(null);
    };

    const handleLangChange = (newLang) => {
        changeLanguage(newLang);
        setAnchorElLang(null);
    };


    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open); // Directly set the boolean value
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img
                        style={{
                            width: '100%',
                            maxWidth: '70px',
                            maxHeight: '70px',
                        }}
                        src={Logo}
                        alt="Logo"
                    />
                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: 'flex-end',
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer(true)} // Open the drawer
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            sx={{
                                '& .MuiPaper-root': {
                                    backgroundColor: 'primary.main', // Change to your desired color
                                    color: 'white',                 // Change text color if needed
                                },
                            }}
                            anchor="right"
                            open={state} // Pass the boolean state directly
                            onClose={toggleDrawer(false)} // Close the drawer
                        >
                            <List>

                                {Navegacion[lang].map((page, index) => [
                                    <Link
                                        key={page.link}
                                        to={lang + page.link}
                                        style={{
                                            display: 'flex',
                                            width: '100%',
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                        className="menu-link"
                                        onClick={toggleDrawer(false)}
                                    >
                                        <ListItem key={page}>
                                            <Typography
                                                onClick={toggleDrawer(false)}
                                                sx={{
                                                    fontSize: '0.85rem',
                                                }}
                                            >
                                                {page.text}
                                            </Typography>
                                        </ListItem>
                                    </Link>,
                                    index !== Navegacion[lang].length - 1 && (
                                        <Divider
                                            style={{ margin: '0px' }}
                                            orientation="horizontal"
                                            variant="fullWidth"
                                            flexItem
                                        />
                                    ),
                                ])}
                                <Accordion sx={{
                                    paddingBottom:0
                                }}>
                                    <AccordionSummary
                                     sx={{
                                        margin: 0,
                                        minHeight: 0, // Default minHeight when not expanded
                                        '&.Mui-expanded': {
                                            minHeight: 0, // Override minHeight when expanded
                                        },
                                    }}
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography sx={{
                                            fontSize: '0.85rem',
                                        }}>{lang === 'en' ? 'English' : 'Español'}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{padding:0}}>
                                        <List sx={{paddingTop:0, paddingBottom:0}}>
                                            <ListItem sx={{
                                                
                                                fontSize: '0.85rem',
                                                color: "white",
                                                fontWeight: lang === "es" ? "bold" : "normal",
                                                backgroundColor: lang === "es" ? "primary.selected" : "transparent",
                                            }}
                                                onClick={() => handleLangChange("es")}
                                            >
                                                Español
                                            </ListItem>
                                            <ListItem
                                                sx={{
                                                    fontSize: '0.85rem',
                                                    color: "white",
                                                    fontWeight: lang === "en" ? "bold" : "normal",
                                                    backgroundColor: lang === "en" ? "primary.selected" : "transparent",
                                                }}
                                                onClick={() => handleLangChange("en")}
                                            >
                                                English
                                            </ListItem>
                                        </List>
                                    </AccordionDetails>
                                </Accordion>
                            </List>
                        </Drawer>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'flex-end',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        {Navegacion[lang].map((page) => (
                            <React.Fragment key={page.id}>
                                <Link
                                    to={lang + page.link}
                                    style={{
                                        display: 'flex',
                                        width: 'fit-content',
                                        textDecoration: 'none',
                                        color: 'white',
                                    }}
                                    className="menu-link"
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '1.15rem',
                                            paddingLeft: '0.5rem',
                                            paddingRight: '0.5rem',
                                        }}
                                    >
                                        {page.text}
                                    </Typography>
                                </Link>
                                {page.id !==
                                    Navegacion[lang][Navegacion[lang].length - 1].id && (
                                        <Divider
                                            sx={{ borderLeftWidth: 1 }}
                                            orientation="vertical"
                                            variant="middle"
                                            flexItem
                                        />
                                    )}
                            </React.Fragment>
                        ))}
                    </Box>


                    <Button variant="outlined" sx={{ color: 'white', display: { xs: 'none', md: 'flex' } }}
                        onClick={handleLangMenu}
                    >
                        {lang} <ExpandMoreIcon />
                    </Button>
                    <Menu
                        sx={{
                            mt: '45px',
                            ml: '5px',
                            '& .MuiPaper-root': {
                                backgroundColor: Boolean(anchorElLang) ? 'primary.main' : 'primary.main', // Ensure it applies to the Menu's Paper
                            },
                        }}
                        id="menu-appbar"
                        anchorEl={anchorElLang}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}

                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElLang)}
                        onClose={handleLangClose}

                    >
                        <MenuItem
                            sx={{
                                color: "white",
                                fontWeight: lang === "es" ? "bold" : "normal",
                                backgroundColor: lang === "es" ? "primary.selected" : "transparent",
                            }}
                            onClick={() => handleLangChange("es")}
                        >
                            Español
                        </MenuItem>
                        <MenuItem
                            sx={{
                                color: "white",
                                fontWeight: lang === "en" ? "bold" : "normal",
                                backgroundColor: lang === "en" ? "primary.selected" : "transparent",
                            }}
                            onClick={() => handleLangChange("en")}
                        >
                            English
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default ResponsiveAppBar

