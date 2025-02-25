import './App.css';
import { CssBaseline } from '@mui/material';
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer';
import { Contactenos } from './components/Contactenos';
import { Hero } from './components/Home/Hero';
import { useLayoutEffect } from 'react'
import AppBar from './components/AppBar'
import { Concepto } from './components/Home/Concepto';
import { Destinos } from './components/Home/Destinos';
import { LangProvider } from './components/utils/LangProvider';
import { FAQs } from './components/FAQs';
import { Nosotros } from './components/Nosotros';
import { Tours } from './components/Tours';
import { PhotoGallery } from './components/PhotoGallery';




function App() {
    const location = useLocation()


    useLayoutEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        })
    }, [location.pathname])




    const Home = () => {
        return (
            <>
                <Hero />
                <Concepto />
                <Destinos />

            </>
        )
    }
 

    return (
        <div        
            style={{
                minHeight: '100vh',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >           
            <CssBaseline />
            <LangProvider>
            <AppBar />
            
            

            <Routes>
                <Route path="/:langParam?/gallery" element={<PhotoGallery />} />
                <Route path="/:langParam?/faqs" element={<FAQs />} />
                <Route path="/:langParam?/contact" element={<Contactenos/>} /> 
                <Route path="/:langParam/about" element={<Nosotros />} />
                <Route path="/:langParam/tours" element={<Tours />} />                
                <Route path="/:langParam?/*" element={<Home />} />
            </Routes>

            <Footer />
      </LangProvider>
        </div>
    )
}

export default App