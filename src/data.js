export const destinos = {
  es: [
    {
      id: 1,
      city: "Kioto",
      description:
        "¡Exploremos la capital cultural de Japón! Desde los lugares más emblemáticos como el Fushimi Inari, el Castillo Nijo o el Pabellón Dorado, hasta gemas secretas donde no van otros viajeros y cuyos nombres quizás no hayas escuchado antes, te brindaremos información que no encontrarás en internet.",
      image: "/images/destinos/placeholder.svg",
    },
    {
      id: 2,
      city: "Osaka",
      description:
        "¡Paseemos juntos por las calles de esta increíble ciudad! Visitaremos lugares emblemáticos como el Castillo de Osaka, el área de Shinsekai o la calle Dotombori, pero también nos ocuparemos de mostrarte lugares ocultos y hablar sobre detalles que conocemos por vivir aquí durante años.",
      image: "/images/destinos/placeholder.svg",
    },
    {
      id: 3,
      city: "Nara",
      description:
        "Perfecto para un paseo por el parque, con mucho espacio y ciervos que podemos tocar y alimentar, además de visitar el monumental templo Todai-ji. También podemos incluir lugares fuera de lo común. Si lo prefieres, podemos pasar medio día en Nara y la otra mitad en Kioto.",
      image: "/images/destinos/placeholder.svg",
    },
  ],
  en: [
    {
      id: 1,
      city: "Kyoto",
      description:
        "Let’s explore the cultural capital of Japan! Through the most iconic landmarks such as The Fushimi Inari, The Nijo Castle, or The Golden Pavilion to secret gems where no other travelers go and which names you might not have heard before, we will provide you with information that you don’t find on the internet.",
      image: "/images/destinos/placeholder.svg",
    },
    {
      id: 2,
      city: "Osaka",
      description:
        "Let’s hang out together through the streets of this amazing city. We will be able to visit famous landmarks such as the Osaka Castle, Shinsekai area, or Dotombori Street but we will take care to show you hidden sites and talk about details that we know by living here for years.",
      image: "/images/destinos/placeholder.svg",
    },
    {
      id: 3,
      city: "Nara",
      description:
        "Perfect for a walk in a park, plenty of space, and deers that we can touch and feed, and to visit the monumental Todai-ji temple. Adding as well off-the-beaten-path locations. In case you want, we could also spend half of the day in Nara and the other half in Kyoto.",
      image: "/images/destinos/placeholder.svg",
    },
  ],
};

export const ToursData = {
  es: [
    {
      name: "Descubre Kioto",
      type: "Tour Privado",
      location: "Kioto",
      meeting_place: "el lobby de tu hotel o cualquier otro lugar que prefieras",
      options: [
        {
          duration_type: "Día completo",
          duration: "8 horas",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", ],
          capacity: "7",
        },
        {
          duration_type: "Medio día",
          duration: "4 horas",
          price: ["17,000 JPY", "17,000 JPY","17,000 JPY","17,000 JPY","17,000 JPY","17,000 JPY","17,000 JPY",],
          capacity: "7",
        },
      ],
      inclusions: [
        "Recogida en el hotel",
        "Guía turístico",
        "Gastos del guía durante el tour",
      ],
      exclusions: ["Transporte", "Comidas", "Entradas"],
      image: "/images/tours/placeholder.svg",
    },
    {
      name: "Gion Mágico; Tour Nocturno a Pie",
      type: "Tour Publico",
      location: "Kioto/Gion",
      meeting_place: "Disney Store en la intersección de Shijo Kawaramachi",
      options: [
        {
          duration_type: "Medio día",
          duration: "3 horas",
          price: ["15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", ],
          capacity: "10",
        },
      ],
      inclusions: [
        "Guía turístico",
        "Gastos del guía durante el tour",
        "Snacks para los viajeros durante el tiempo de descanso",
      ],
      exclusions: ["Recogida en el hotel", "Transporte"],
      image: "/images/tours/placeholder.svg",
    },
    {
      name: "Metrópolis de Osaka",
      type: "Tour Privado",
      location: "Osaka",
      meeting_place: "el lobby de tu hotel o cualquier otro lugar que prefieras",
      options: [
        {
          duration_type: "Día completo",
          duration: "8 horas",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", ],
          capacity: "7",
        },
        {
          duration_type: "Medio día",
          duration: "4 horas",
          price: ["17,000 JPY", "17,000 JPY","17,000 JPY","17,000 JPY","17,000 JPY","17,000 JPY","17,000 JPY",],
          capacity: "7",
        },
      ],
      inclusions: [
        "Recogida en el hotel",
        "Guía turístico",
        "Gastos del guía durante el tour",
      ],
      exclusions: ["Transporte", "Comidas", "Entradas"],
      image: "/images/tours/placeholder.svg",
    },
    {
      name: "Nara, Tradición y Naturaleza Reveladas",
      type: "Tour Privado",
      location: "Nara o Nara y Kioto",
      meeting_place: "el lobby de tu hotel o cualquier otro lugar que prefieras",
      options: [
        {
          duration_type: "Día completo",
          duration: "8 horas",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", ],
          capacity: "7",
        },
        {
          duration_type: "Medio día",
          duration: "4 horas",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", ],
          capacity: "7",
        },
      ],
      inclusions: [
        "Recogida en el hotel",
        "Guía turístico",
        "Gastos del guía durante el tour",
      ],
      exclusions: ["Transporte", "Comidas", "Entradas"],
      image: "/images/tours/placeholder.svg",
    },
  ],
  en: [
    {
      name: "Discover Kyoto",
      type: "Private Tour",
      location: "Kyoto",
      meeting_place: "your hotel lobby or any other location you prefer",
      inclusions: ["Hotel pick up", "Tour guide", "Tour Guide expenses during the tour "],
      exclusions: ["Transportation", "Meals", "Entrance fees"],
      options: [
        {
          duration_type: "Full day tour",
          duration: "8 hours",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", ],
          capacity: "7",
        },
        {
          duration_type: "Half day tour",
          duration: "4 hours",
          price: ["17,000 JPY", "17,000 JPY","17,000 JPY","17,000 JPY","17,000 JPY","17,000 JPY","17,000 JPY",],
          capacity: "7",
        },
      ],
      capacidad: "7",
      image: "/images/tours/placeholder.svg",
    },
    {
      name: "Magical Gion; Evening Walking Tour",
      type: "Public Tour",
      location: "Kyoto/Gion",
      meeting_place: "Disney Store at Shijo Kawaramachi crossroad",
      options: [
        {
          duration_type: "Half day tour",
          duration: "3 hours",
          price: ["15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", ],
          capacity: "10",
        },
      ],
      inclusions: [
        "Tour Guide",
        "Tour Guide expenses during the tour",
        "Snacks for the travellers during breaking time",
      ],
      exclusions: ["Hotel pick up", "Transportation"],
      image: "/images/tours/placeholder.svg",
    },
    {
      name: "Osaka Metropolis",
      type: "Private Tour",
      location: "Osaka",
      meeting_place: "your hotel lobby or any other location you prefer",
      options: [
        {
          duration_type: "Full day tour",
          duration: "8 hours",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", ],
          capacity: "7",
        },
        {
          duration_type: "Half day tour ",
          duration: "4 hours",
          price: ["17,000 JPY", "17,000 JPY","17,000 JPY","17,000 JPY","17,000 JPY","17,000 JPY","17,000 JPY",],
          capacity: "7",
        },
      ],
      inclusions: [
        "Hotel pick up",
        "Tour Guide",
        "Tour Guide expenses during the tour",
      ],
      exclusions: ["Transportation", "Meals", "Entrance fees"],
      image: "/images/tours/placeholder.svg",
    },
    {
      name: "Nara, Unveiled Tradition And Nature",
      type: "Private Tour",
      location: "Nara or Nara and Kyoto",
      meeting_place: "your hotel lobby or any other location you prefer",
      options: [
        {
          duration_type: "Full day tour",
          duration: "8 hours",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", ],
          capacity: "7 ",
        },
        {
          duration_type: "Half day tour ",
          duration: "4 hours",
          price: ["17,000 JPY", "17,000 JPY","17,000 JPY","17,000 JPY","17,000 JPY","17,000 JPY","17,000 JPY",],
          capacity: "7 ",
        },
      ],
      inclusions: [
        "Hotel pick up",
        "Tour Guide",
        "Tour Guide expenses during the tour",
      ],
      exclusions: ["Transportation", "Meals", "Entrance fees"],
      image: "/images/tours/placeholder.svg",
    },
  ]
};

export const ToursImages = [
  { id: 1, url: "/images/about/placeholder.svg" },
  { id: 2, url: "/images/about/placeholder.svg" },
  { id: 3, url: "/images/about/placeholder.svg" },
  { id: 4, url: "/images/about/placeholder.svg" },
  { id: 5, url: "/images/about/placeholder.svg" },
  { id: 6, url: "/images/about/placeholder.svg" },
  { id: 7, url: "/images/about/placeholder.svg" },
  { id: 8, url: "/images/about/placeholder.svg" },
  { id: 9, url: "/images/about/placeholder.svg" },
  { id: 10, url: "/images/about/placeholder.svg" },
  { id: 11, url: "/images/about/placeholder.svg" },
  { id: 12, url: "/images/about/placeholder.svg" }
];

export const FAQData = {
  es: [
    {
      question: "¿Cómo puedo reservar un tour?",
      answer: "Puede reservar un tour a través de nuestra página de Tours o contactándonos directamente por correo electrónico o teléfono."
    },
    {
      question: "¿Los tours son en español?",
      answer: "Sí, ofrecemos tours en español con guías locales que hablan el idioma fluidamente."
    },
    {
      question: "¿Cuál es la política de cancelación?",
      answer: "Ofrecemos cancelación gratuita hasta 48 horas antes del inicio del tour. Para más detalles, consulte nuestra política de cancelación."
    },
    {
      question: "¿Los tours son adecuados para niños?",
      answer: "La mayoría de nuestros tours son aptos para todas las edades. Indicamos en la descripción de cada tour si hay restricciones de edad."
    },
    {
      question: "¿Qué debo llevar a los tours?",
      answer: "Recomendamos llevar ropa y calzado cómodos, protección solar, agua y una cámara. Dependiendo del tour, podríamos sugerir artículos adicionales."
    },
    {
      question: "¿Ofrecen tours privados?",
      answer: "Sí, ofrecemos tours privados personalizados para grupos pequeños o familias. Contáctenos para más información."
    }
  ],
  en: [
    {
      question: "How can I book a tour?",
      answer: "You can book a tour through our Tours page or by contacting us directly via email or phone."
    },
    {
      question: "Are the tours in Spanish?",
      answer: "Yes, we offer tours in Spanish with local guides who speak the language fluently."
    },
    {
      question: "What is the cancellation policy?",
      answer: "We offer free cancellation up to 48 hours before the tour begins. For more details, see our cancellation policy."
    },
    {
      question: "Are the tours suitable for children?",
      answer: "Most of our tours are suitable for all ages. We indicate in each tour's description if there are age restrictions."
    },
    {
      question: "What should I bring to the tours?",
      answer: "We recommend bringing comfortable clothing and shoes, sunscreen, water, and a camera. Depending on the tour, we might suggest additional items."
    },
    {
      question: "Do you offer private tours?",
      answer: "Yes, we offer personalized private tours for small groups or families. Contact us for more information."
    }
  ]
};

export const AboutImages = [
  { id: 1, url: "/images/about/placeholder.svg" },
  { id: 2, url: "/images/about/placeholder.svg" },
  { id: 3, url: "/images/about/placeholder.svg" },
  { id: 4, url: "/images/about/placeholder.svg" },
  { id: 5, url: "/images/about/placeholder.svg" },
  { id: 6, url: "/images/about/placeholder.svg" },
  { id: 7, url: "/images/about/placeholder.svg" },
  { id: 8, url: "/images/about/placeholder.svg" },
  { id: 9, url: "/images/about/placeholder.svg" },
  { id: 10, url: "/images/about/placeholder.svg" },
  { id: 11, url: "/images/about/placeholder.svg" },
  { id: 12, url: "/images/about/placeholder.svg" }
];

export const Navegacion = 
 { es: [
    {
        id: 1,
        text: 'Inicio',
        link: '/home',
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
        link: '/contact',
    },
    {
        id: 4,
        text: 'Quienes somos',
        link: '/about',
    },

  ],
  en: [
    {
        id: 1,
        text: 'Home',
        link: '/home',
    },
    {
        id: 2,
        text: 'Tours',
        link: '/tours',
    },
    {
        id: 5,
        text: 'FAQs',
        link: '/faqs',
    },
    {
        id: 3,
        text: 'Contact',
        link: '/contact',
    },
    {
        id: 4,
        text: 'About',
        link: '/about',
    },

  ]
}
