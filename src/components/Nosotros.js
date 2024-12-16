import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { useLang } from "./utils/LangProvider";
import GuideImage from '../assets/about_image.jpg'
import { Helmet } from 'react-helmet';
import { metaTexts } from "../metaTextData";
import { SeoHelmet } from "./utils/SeoHelmet";


const Nosotros = () => {
    const { lang } = useLang();

    const aboutText = {
        en: {
            title: "About Us",
            subtitle: "Our Concept",
            concept: (
                <>
                    We love to meet and communicate with people of all backgrounds and nationalities, either solo travellers, couples, families, groups of friends, young, aged, etc… at the point that we see this activity as much more than a job, is actually a significant part of our social life in general
                    <br />
                    We will adapt to different kinds of motivations and points of view in order to offer the best visits and more valuable information in accordance to each guest
                    <br />
                    We value empathy and we hope, as usually happens, to end the tour with a feeling of friendship
                </>
            ),
            biography: {
                name: "My Name is Alex (Alejandro Oberti) ",
                text: (
                    <>
                        Before ending up in Japan, many years back, I had a nomad life across several Asian countries for many years as well. I spent most of that time in India, where among other activities I had my first experiences as a tour guide. There I also met my wife, and when the relationship got more serious we decided to settle down and have a more stable life, we chose Japan where she is from.
                        <br />
                        Since then I had many personal experiences in this country in different fields such as human relations, jobs in different sectors, trips, bizarre situations, etc. Experiences that I always like to share, together with some knowledge about aspects of the culture that I studied for years, just for the sake of getting knowledge without thinking I would become a tour guide here in the future.
                        <br />
                        At the moment I still working as such for different agencies but I’m also on this project by myself
                        <br />
                        By the way, I appreciate a lot the human factor, and besides of having a responsibility I enjoy a lot just meeting and being with new people. 
                        <br />
                        In other words; I love this job, I love the culture I show, and I love human communication in itself.
                        <br />
                        Let’s meet and spend time together in the city of Kyoto where I reside and in its nearby cities full of curiosities where I go very often
                    </>
                )
            },
            ending: "Other hosts here are freelance tour guides in who I put all my trust; for being so friendly, nice to spend time with, for having years of experience doing this activity and for their general experiences living here"
        },
        es: {
            title: "Quiénes Somos",
            subtitle: "Nuestro Concepto",
            concept: (
                <>
                    Nos encanta conocer y comunicarnos con personas de todos los orígenes y nacionalidades, ya sean viajeros en solitario, parejas, familias, grupos de amigos, jóvenes, mayores, etc.. hasta el punto de que vemos esta actividad como mucho más que un trabajo, en realidad es una parte importante de nuestra vida social en general
                    <br />
                    Nos adaptaremos a diferentes tipos de motivaciones y puntos de vista para ofrecer las más acordes visitas y el tipo de información más importante según la persona
                    <br />
                    Valoramos la empatía y esperamos, como suele suceder, terminar el recorrido con un sentimiento de amistad
                </>
            ),
            biography: {
                name: "Mi nombre es Alex (Alejandro Oberti) ",
                text: (
                    <>
                        Antes de establecerme en Japón, hace muchos años, llevé una vida nómada por varios países de Asia durante varios años también . Pasé la mayor parte de ese tiempo en India, donde, entre otras actividades, tuve mis primeras experiencias como guía turístico. Allí también conocí a mi esposa, y cuando nuestra relación se volvió más seria, decidimos establecernos y llevar una vida más estable. Elegimos Japón, de donde ella es originaria.
                        <br />
                        Desde entonces, he tenido muchas experiencias personales en este país en diferentes ámbitos, como relaciones humanas, trabajos en distintos sectores, viajes, situaciones curiosas, etc. Experiencias que siempre me gusta compartir, junto con algunos conocimientos sobre aspectos de la cultura que estudié durante años, solo por el placer de aprender, sin pensar que en el futuro me convertiría en un guía turístico aquí.
                        <br />
                        Actualmente sigo trabajando como guía para diferentes agencias, pero también estoy desarrollando este proyecto por mi cuenta.
                        <br />
                        Por cierto, valoro mucho el factor humano, y además de la responsabilidad que implica, disfruto mucho conocer y estar con nuevas personas. En otras palabras: amo este trabajo, amo la cultura que muestro y amo la comunicación humana en sí misma. 
                        <br />
                        Conozcámonos y pasemos tiempo juntos en la ciudad de Kioto donde resido y en las ciudades cercanas llenas de curiosidades a las que voy con mucha frecuencia!
                    </>
                )
            },
            ending: "Otros guías aquí son guías turísticos independientes en quienes deposito toda mi confianza; por ser tan amables, por lo agradable que es pasar tiempo con ellos, por tener años de experiencia en esta actividad y por sus experiencias generales viviendo aquí."

        },
        it: {
            title: "Chi Siamo",
            subtitle: "Il Nostro Concetto",
            concept: (
                <>
                    Amiamo incontrare e comunicare con persone di ogni origine e nazionalità, siano essi viaggiatori singoli, coppie, famiglie, gruppi di amici, giovani, anziani, ecc. Al punto che consideriamo questa attività molto più di un lavoro, In realtà è una parte importante della nostra vita sociale complessiva
                    <br />
                    Ci adatteremo a diversi tipi di motivazioni e punti di vista per offrire i migliori visite e il tipo di informazioni più importanti a seconda della persona
                    <br />
                    Apprezziamo l'empatia e speriamo, come spesso accade, di concludere il percorso con un sentimento di amicizia
                </>
            ),
            biography: {
                name: "Mi chiamo Alex (Alejandro Oberti) ",
                text: (
                    <>
                         Prima di stabilirmi in Giappone molti anni fa, ho vissuto per diversi anni anche una vita nomade in vari paesi dell'Asia. Ho trascorso gran parte di quel tempo in India, dove, tra le altre attività, ho avuto le mie prime esperienze come guida turistica. Lì ho conosciuto anche mia moglie e quando la nostra relazione è diventata più seria abbiamo deciso di sistemarci e condurre una vita più stabile. Abbiamo scelto il Giappone, da dove è originaria.
                        <br />
                        Da allora ho avuto molte esperienze personali in questo Paese in diversi ambiti, come le relazioni umane, lavori in diversi settori, viaggi, situazioni curiose, ecc. Sono esperienze che mi piace condividere sempre, insieme ad alcune conoscenze su aspetti della cultura che ho studiato per anni, solo per il piacere di imparare, senza pensare che in futuro sarei diventata una guida turistica. 
                        <br />
                        Attualmente continuo a lavorare come guida per diverse agenzie, ma sto sviluppando questo progetto anche per conto mio. 
                        <br />
                        A proposito, apprezzo molto il fattore umano e, oltre alla responsabilità che implica, mi piace molto incontrare e stare con nuove persone. In altre parole: amo questo lavoro, amo la cultura che mostro e amo la comunicazione umana stessa. 
                        <br />
                        Conosciamoci e passiamo del tempo insieme nella città di Kyoto, dove vivo, e nelle città vicine piene di curiosità che frequento molto spesso! 
                    </>
                )
            },
            ending: "Altre guide qui sono guide turistiche indipendenti nelle quali ripongo tutta la mia fiducia; per la loro cordialità, per quanto è piacevole trascorrere del tempo con loro, per avere anni di esperienza in questa attività e per le loro esperienze in generale vivendo qui."

        },
        fr: {
            title: "Qui Nous Sommes",
            subtitle: "Notre Concept",
            concept: (
                <>
                    Nous aimons rencontrer et nous communiquer avec des personnes de toutes origines et nationalités, qu'il s'agisse de voyageurs seuls, de couples, de familles, de groupes d'amis, de jeunes, de personnes âgées, etc…Au point que nous considérons cette activité comme bien plus qu'un travail, C'est en fait une partie importante de notre vie sociale en général
                    <br />
                    Nous nous adapterons à différents types de motivations et de points de vue pour proposer les promenades et types d'informations les plus importants selon la personne
                    <br />
                    Nous valorisons l’empathie et espérons, comme c’est souvent le cas, terminer la tournée avec un sentiment d'amitié
                </>
            ),
            biography: {
                name: "Je m'appelle Alex (Alejandro Oberti) ",
                text: (
                    <>
                         Avant de m'installer au Japon il y a de nombreuses années, j'ai également vécu plusieurs années une vie nomade dans divers pays d'Asie. J'ai passé la majeure partie de ce temps en Inde, où, entre autres activités, j'ai fait mes premières expériences en tant que guide touristique. Là j'ai aussi rencontré ma femme et lorsque notre relation est devenue plus sérieuse, nous avons décidé de nous installer et de mener une vie plus stable. Nous avons choisi le Japon, dont elle est originaire.
                        <br />
                        Depuis, j'ai vécu de nombreuses expériences personnelles dans ce pays dans différents domaines, comme les relations humaines, les emplois dans différents secteurs, les voyages, les situations curieuses, etc. Ce sont des expériences que j'aime toujours partager, ainsi que quelques connaissances sur certains aspects de la culture que j'ai étudiées pendant des années, juste pour le plaisir d'apprendre, sans penser qu'à l'avenir je deviendrais guide touristique.
                        <br />
                        Actuellement je continue à travailler comme guide pour différentes agences, mais je développe également ce projet par moi-même.
                        <br />
                        D'ailleurs, j'accorde une grande valeur au facteur humain et, en plus de la responsabilité qu'il implique, j'aime beaucoup rencontrer et être avec de nouvelles personnes. En d’autres termes : j’aime ce métier, j’aime la culture que je mets en valeur et j’aime la communication humaine elle-même.
                        <br />
                        Faisons connaissance et passons du temps ensemble dans la ville de Kyoto, où j'habite, et dans les villes voisines pleines de curiosités que je visite très fréquemment ! 
                    </>
                )
            },
            ending: "Les autres guides ici sont des guides touristiques indépendants en qui j'accorde toute ma confiance ; pour leur gentillesse, pour combien il est agréable de passer du temps avec eux, pour avoir des années d'expérience dans cette activité et pour leur expérience générale de vivre ici"

        },
    };


    return (
        <div style={{ width: '100vw', maxWidth: '100%' }}>
           <SeoHelmet lang={lang} page="about" />
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
                    <Typography sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: '1.875rem', marginBottom: '1.5rem' }}>
                        {aboutText[lang].title}
                    </Typography>
                    <Typography sx={{ fontWeight: '600', fontSize: '1.5rem', lineHeight: '2rem', marginBottom: '1rem' }}>
                        {aboutText[lang].subtitle}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '1.125rem',
                            lineHeight: '1.75rem',
                            marginBottom: '1rem',
                        }}
                    >
                        {aboutText[lang].concept}
                    </Typography>

                </Grid>

                <Grid
                    container>

                    <Grid
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                        size={{ xs: 12, sm: 'auto' }}
                    >
                        <Box
                            sx={{
                                maxWidth: '300px',
                                maxHeight: '300px',
                                aspectRatio: 1 / 1,
                                '@media (max-width: 768px)': {
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    aspectRatio: 'unset', // Unset aspect ratio for smaller screens
                                },
                            }}
                        >
                            <img
                                style={{
                                    borderRadius: '20px',

                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover', // Adjust based on your needs
                                }}
                                loading="lazy"
                                src={GuideImage}
                                alt="Testimonial"
                            />
                        </Box>


                    </Grid>
                    <Grid
                        size='grow'
                    >


                        <Typography
                            sx={{
                                fontSize: '1.125rem',
                                lineHeight: '1.75rem',
                                marginBottom: '1rem',
                            }}
                        >                            
                                
                                    <span
                                        style={{
                                            fontWeight: '600',
                                            fontSize: '1.3rem',
                                            lineHeight: '2rem',
                                        }}
                                    >
                                        {aboutText[lang].biography.name}
                                    </span>
                                    {aboutText[lang].biography.text}

                        </Typography>

                    </Grid>
                    <Typography sx={{ fontWeight: '600', fontSize: '1.15rem', lineHeight: '2rem', marginBottom: '1rem' }}>
                        {aboutText[lang].ending}
                    </Typography>
                </Grid>
            </Grid>
        </div>)
}

export { Nosotros }
