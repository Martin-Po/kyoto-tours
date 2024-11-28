import './App.css';
import { CssBaseline } from '@mui/material';
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import Footer from './components/Footer';
import { Contactenos } from './components/Contactenos';
import { EncontranosMaps } from './components/EncontranosMaps';
import { Hero } from './components/Home/Hero';
import { useLayoutEffect } from 'react'
import AppBar from './components/AppBar'
import { Concepto } from './components/Home/Concepto';
import { Destinos } from './components/Home/Destinos';
import { LangProvider } from './components/utils/LangProvider';
import { FAQs } from './components/FAQs';
import { Nosotros } from './components/Nosotros';




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
    

    const ContactenosSite = () => {
        return (
            <>
                <Contactenos />
                <EncontranosMaps />
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
                <Route path="/:langParam?/faqs" element={<FAQs />} />
                <Route path="/:langParam?/contact" element={<Contactenos/>} /> 
                <Route path="/:langParam/about" element={<Nosotros />} />
                
                <Route path="/:langParam?/*" element={<Home />} />

                {/* <Route path="/:lang(en|es)?/tours" element={<Tours />} />
      
      
      */
      
      }

            </Routes>
      </LangProvider>

            <Footer />
        </div>
    )
}

export default App