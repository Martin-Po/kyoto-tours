import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Logo from '../assets/logo_light.png'
import MenuIcon from '@mui/icons-material/Menu'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import { Button, Divider, Menu, MenuItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { AccountCircle } from '@mui/icons-material'
import { useLang } from './utils/LangProvider'

const Navegacion = [
    {
        id: 1,
        text: 'Inicio',
        link: '/inicio',
    },
    {
        id: 2,
        text: 'Tours',
        link: '/tours',
    },
    {
        id: 5,
        text: 'Preguntas frecuentes',
        link: '/faqs',
    },
    {
        id: 3,
        text: 'Contactenos',
        link: '/Contactenos',
    },
    {
        id: 4,
        text: 'Quienes somos',
        link: '/nosotros',
    },
]

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null)
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

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }




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
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {Navegacion.map((page, index) => [
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
                                    onClick={handleCloseNavMenu}
                                >
                                    <MenuItem key={page}>
                                        <Typography
                                            onClick={handleCloseNavMenu}
                                            sx={{
                                                fontSize: '0.85rem',
                                            }}
                                        >
                                            {page.text}
                                        </Typography>
                                    </MenuItem>
                                </Link>,
                                index !== Navegacion.length - 1 && (
                                    <Divider
                                        style={{ margin: '0px' }}
                                        orientation="horizontal"
                                        variant="fullWidth"
                                        flexItem
                                    />
                                ),
                            ])}
                        </Menu>
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
                        {Navegacion.map((page) => (
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
                                        onClick={handleCloseNavMenu}
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
                                    Navegacion[Navegacion.length - 1].id && (
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
                    <Button variant="outlined" sx={{ color: 'black' }}
                        onClick={handleLangMenu}
                    >
                        {lang} <ExpandMoreIcon />
                    </Button>
                    <Menu
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
                        <MenuItem onClick={() => handleLangChange("es")}>Español</MenuItem>
                        <MenuItem onClick={() => handleLangChange("en")}>English</MenuItem>
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default ResponsiveAppBar
