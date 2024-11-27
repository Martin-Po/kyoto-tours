import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
    const { langParam } = useParams();
    const [lang, setLang] = useState(langParam || "en");
    const location = useLocation();
    const navigate = useNavigate();

    // Sync lang state with the URL
    useEffect(() => {
        console.log('haciendo cambio');
        if (location.pathname.slice(0, 4).split('').filter(e => e === '/').length === 2) {
            const newlang = location.pathname.slice(1, 3)
            if (newlang !== lang) {
                setLang(newlang); // Update the lang state if the URL changes
            }
        }

        if (location.pathname.slice(0, 4).split('').filter(e => e === '/').length === 1) {
            let newLang = 'en'
            if (location.pathname === '/es') newLang = 'es'
            navigate(`/${newLang}/`);
            setLang(newLang) // Update the lang state if the URL changes

        }

        if (langParam && langParam !== lang) {

        }
    }, [langParam, lang]);

    // Function to change language in the URL
    const changeLanguage = (newLang) => {

        setLang(newLang);
        navigate(`/${newLang}${location.pathname.slice(3)}`); // Update the language part of the URL
    };

    return (
        <LangContext.Provider value={{ lang, changeLanguage }}>
            {children}
        </LangContext.Provider>
    );

};

// Custom hook to access language context
export const useLang = () => useContext(LangContext);
