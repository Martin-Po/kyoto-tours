export const destinos = {
  es: [
    {
      id: 1,
      city: "Kioto",
      description:
        "Déjanos mostrarte la capital cultural de Japón! Desde monumentos emblemáticos como el Castillo de Nijo, Fushimi Inari, Kyomizudera o el Pabellon de Oro hasta lugares más secretos cuyos nombres quizás nunca hayas oído antes, te brindaremos información sobre detalles que no encontrarás en Internet",
      image: "/images/destinos/Kyoto_image.jpg",
    },
    {
      id: 2,
      city: "Osaka",
      description:
        "Vamos a pasear juntos por las calles de esta increíble ciudad. Visitaremos lugares emblemáticos como el Castillo de Osaka, el área de Shinsekai o la calle Dotombori, pero también nos ocuparemos de mostrarte lugares ocultos y hablar sobre características que conocemos por vivir aquí durante años",
      image: "/images/destinos/osaka_image.jpg",
    },
    {
      id: 3,
      city: "Nara",
      description:
        "Perfecto para pasear por un parque muy amplio y lleno ciervos a los que podremos tocar y dar de comer, como tambien visitar el monumental templo Todai-ji. Añadiendo también lugares fuera de lo común. En caso de solicitarlo también podríamos pasar la mitad del día en Nara y la otra mitad en Kioto",
      image: "/images/destinos/nara_image.jpg",
    },
  ],
  en: [
    {
      id: 1,
      city: "Kyoto",
      description:
        "Let us show you the cultural capital of Japan! From iconic landmarks such as The Fushimi Inari, Nijo Castle or the Golden Pavilion to secret gems and locations which names you may have never heard before, we’ll provide you information on details that you won’t find on the internet.",
      image: "/images/destinos/Kyoto_image.jpg",
    },
    {
      id: 2,
      city: "Osaka",
      description:
        "Let’s hang out together through the streets of this amazing city. We will visit The Osaka Castle, Shinsekai area, Dotombori Street and other must see locations, but we will also take care to show you hidden sites and talk about aspects that we know by living here for years",
      image: "/images/destinos/osaka_image.jpg",
    },
    {
      id: 3,
      city: "Nara",
      description:
        "Perfect for a walk in a park full of space and deers that we can touch and feed, and to visit the monumental Todai-ji temple. Adding as well off the beaten path locations. In case you want, we could also spend half of the day in Nara and the other half in Kyoto",
      image: "/images/destinos/nara_image.jpg",
    },
  ],
  it: [
    {
      id: 1,
      city: "Kioto",
      description:
        "Lasciaci mostrarti la capitale culturale del Giappone! Dai punti di riferimento iconici come Fushimi Inari, il Castello Nijo o il Padiglione d'Oro ai luoghi molto più segreti di cui forse non hai mai sentito parlare prima. Ti forniremo informazioni che non troverai su Internet",
      image: "/images/destinos/Kyoto_image.jpg",
    },
    {
      id: 2,
      city: "Osaka",
      description:
        "Camminiamo insieme per le strade di questa incredibile città. Visiteremo luoghi iconici come il Castello di Osaka, il quartiere Shinsekai o Dotombori Street, ma ci occuperemo anche di mostrarvi luoghi nascosti e parlarvi di caratteristiche che conosciamo dall'aver vissuto qui per anni",
      image: "/images/destinos/osaka_image.jpg",
    },
    {
      id: 3,
      city: "Nara",
      description:
        "Fantastico per una passeggiata in un parco pieno di spazio e cervi e per visitare il monumentale tempio Todai-ji. Aggiungendo anche luoghi fuori dai sentieri battuti. Se vuoi, potremmo anche trascorrere metà giornata a Nara e l'altra metà a Kyoto",
      image: "/images/destinos/nara_image.jpg",
    },
  ],
  fr: [
    {
      id: 1,
      city: "Kioto",
      description:
        "Laissez-nous vous faire découvrir la capitale culturelle du Japon ! Des monuments emblématiques tels que le Fushimi Inari, le château de Nijo ou le Pavillon d'or à des lieux bien plus secrets dont vous n'avez peut-être jamais entendu parler auparavant , nous vous fournirons des informations sur des détails que vous ne trouverez pas sur Internet",
      image: "/images/destinos/Kyoto_image.jpg",
    },
    {
      id: 2,
      city: "Osaka",
      description:
        "Marchons ensemble dans les rues de cette ville incroyable. Nous visiterons des lieux emblématiques tels que le château d'Osaka, le quartier de Shinsekai ou la rue Dotombori, mais nous nous occuperons également de vous montrer des lieux cachés et de parler de caractéristiques que nous connaissons pour avoir vécu ici pendant des années.",
      image: "/images/destinos/osaka_image.jpg",
    },
    {
      id: 3,
      city: "Nara",
      description:
        "Idéal pour se promener dans un parc très spacieux rempli de cerfs que l'on peut toucher et nourrir, ainsi que visiter le temple monumental Todai-ji. Ajout également d'emplacements hors des sentiers battus. Sur demande, nous pourrions également passer la moitié de la journée à Nara et l'autre moitié à Kyoto.",
      image: "/images/destinos/nara_image.jpg",
    },
  ],
};

export const ToursData = {
  es: [
    {
      name: "DESCUBRE KIOTO",
      type: "Tour Privado",
      location: "Kioto",
      meeting_place: "el lobby de tu hotel o cualquier otro lugar que prefieras",
      options: [
        {
          duration_type: "Día completo",
          duration: "8 horas",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 60, 30, 30, 30, 30, 30],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Medio día",
          duration: "4 horas",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 40, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7",
        },
      ],
      inclusions: [
        "Recogida en el hotel",
        "Guía turístico",
        "Gastos del guía durante el tour",
      ],
      exclusions: ["Transporte", "Comidas", "Entradas"],
      image: "/images/tours/discover_kyoto.jpg",
    },
    {
      name: "GION MÁGICO; TOUR NOCTURNO A PIE",
      type: "Walking tour",
      location: "Kioto/Gion",
      meeting_place: "Disney Store en la intersección de Shijo Kawaramachi",
      options: [
        {
          duration_type: "Caminata",
          duration: "3 horas",
          price: ["15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY",],
          guests: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
          capacity: "10",
        },
      ],
      inclusions: [
        "Guía turístico",
        "Gastos del guía durante el tour",
        "Snacks para los viajeros durante el tiempo de descanso",
      ],
      exclusions: ["Recogida en el hotel", "Transporte"],
      image: "/images/tours/magical_gion.jpg",
    },
    {
      name: "METRÓPOLIS DE OSAKA",
      type: "Tour Privado",
      location: "Osaka",
      meeting_place: "el lobby de tu hotel o cualquier otro lugar que prefieras",
      options: [
        {
          duration_type: "Día completo",
          duration: "8 horas",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 60, 30, 30, 30, 30, 30],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Medio día",
          duration: "4 horas",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 40, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7",
        },
      ],
      inclusions: [
        "Recogida en el hotel",
        "Guía turístico",
        "Gastos del guía durante el tour",
      ],
      exclusions: ["Transporte", "Comidas", "Entradas"],
      image: "/images/tours/osaka_metropolis.jpg",
    },
    {
      name: "NARA, TRADICIÓN Y NATURALEZA REVELADAS",
      type: "Tour Privado",
      location: "Nara o Nara y Kioto",
      meeting_place: "el lobby de tu hotel o cualquier otro lugar que prefieras",
      options: [
        {
          duration_type: "Día completo",
          duration: "8 horas",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 60, 30, 30, 30, 30, 30],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Medio día",
          duration: "4 horas",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [200, 40, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7",
        },
      ],
      inclusions: [
        "Recogida en el hotel",
        "Guía turístico",
        "Gastos del guía durante el tour",
      ],
      exclusions: ["Transporte", "Comidas", "Entradas"],
      image: "/images/tours/nara_unvelied.jpg",
    },
  ],
  en: [
    {
      name: "DISCOVER KYOTO",
      type: "Private Tour",
      location: "Kyoto",
      meeting_place: "your hotel lobby or any other location you prefer",
      inclusions: ["Hotel pick up", "Tour guide", "Tour Guide expenses during the tour "],
      exclusions: ["Transportation", "Meals", "Entrance fees"],
      options: [
        {
          duration_type: "Full day tour",
          duration: "8 hours",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 60, 30, 30, 30, 30, 30],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Half day tour",
          duration: "4 hours",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 40, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7",
        },
      ],
      capacidad: "7",
      image: "/images/tours/discover_kyoto.jpg",
    },
    {
      name: "MAGICAL GION; EVENING WALKING TOUR",
      type: "Walking tour",
      location: "Kyoto/Gion",
      meeting_place: "Disney Store at Shijo Kawaramachi crossroad",
      options: [
        {
          duration_type: "Walking tour",
          duration: "3 hours",
          price: ["15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY", "15,000 JPY",],
          guests: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
          capacity: "10",
        },
      ],
      inclusions: [
        "Tour Guide",
        "Tour Guide expenses during the tour",
        "Snacks for the travellers during breaking time",
      ],
      exclusions: ["Hotel pick up", "Transportation"],
      image: "/images/tours/magical_gion.jpg",
    },
    {
      name: "OSAKA METROPOLIS",
      type: "Private Tour",
      location: "Osaka",
      meeting_place: "your hotel lobby or any other location you prefer",
      options: [
        {
          duration_type: "Full day tour",
          duration: "8 hours",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 60, 30, 30, 30, 30, 30],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Half day tour ",
          duration: "4 hours",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 40, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7",
        },
      ],
      inclusions: [
        "Hotel pick up",
        "Tour Guide",
        "Tour Guide expenses during the tour",
      ],
      exclusions: ["Transportation", "Meals", "Entrance fees"],
      image: "/images/tours/osaka_metropolis.jpg",
    },
    {
      name: "NARA, UNVEILED TRADITION AND NATURE",
      type: "Private Tour",
      location: "Nara or Nara and Kyoto",
      meeting_place: "your hotel lobby or any other location you prefer",
      options: [
        {
          duration_type: "Full day tour",
          duration: "8 hours",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 60, 30, 30, 30, 30, 30],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7 ",
        },
        {
          duration_type: "Half day tour ",
          duration: "4 hours",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 40, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7 ",
        },
      ],
      inclusions: [
        "Hotel pick up",
        "Tour Guide",
        "Tour Guide expenses during the tour",
      ],
      exclusions: ["Transportation", "Meals", "Entrance fees"],
      image: "/images/tours/nara_unvelied.jpg",
    },
  ],
  it: [
    {
      name: "SCOPRI KYOTO",
      type: "Tour privato",
      location: "Kyoto",
      meeting_place: "hall del tuo hotel o qualsiasi altro luogo a tua scelta",
      inclusions: ["Prelievo in hotel", "Guida turistica", "Spese per la guida turistica durante il tour"],
      exclusions: ["Trasporto", "Pasti", "Biglietti d'ingresso"],
      options: [
        {
          duration_type: "Intera giornata",
          duration: "8 ore",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 60, 30, 30, 30, 30, 30],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Mezza giornata",
          duration: "4 ore",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 40, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7",
        },
      ],
      capacidad: "7",
      image: "/images/tours/discover_kyoto.jpg",
    },
    {
      name: "OSAKA METROPOLIS",
      type: "Tour privato",
      location: "Osaka",
      meeting_place: "hall del tuo hotel o qualsiasi altro luogo a tua scelta",
      options: [
        {
          duration_type: "Intera giornata",
          duration: "8 ore",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 60, 30, 30, 30, 30, 30],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Mezza giornata",
          duration: "4 ore",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 40, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7",
        },
      ],
      inclusions: [
        "Prelievo in hotel",
        "Guida turistica",
        "Spese per la guida turistica durante il tour",
      ],
      exclusions: ["Trasporto", "Pasti", "Biglietti d'ingresso"],
      image: "/images/tours/osaka_metropolis.jpg",
    },
    {
      name: "NARA, TRADIZIONE E NATURA SVELATE",
      type: "Tour privato",
      location: "Nara o Nara e Kyoto",
      meeting_place: "hall del tuo hotel o qualsiasi altro luogo a tua scelta",
      options: [
        {
          duration_type: "Intera giornata",
          duration: "8 ore",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 60, 30, 30, 30, 30, 30],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7 ",
        },
        {
          duration_type: "Mezza giornata",
          duration: "4 ore",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 40, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7 ",
        },
      ],
      inclusions: [
        "Prelievo in hotel",
        "Guida turistica",
        "Spese per la guida turistica durante il tour",
      ],
      exclusions: ["Trasporto", "Pasti ", "Biglietti d'ingresso"],
      image: "/images/tours/nara_unvelied.jpg",
    },
  ],
  fr: [
    {
      name: "DÉCOUVRIR KYOTO",
      type: "Visite privée",
      location: "Kyoto",
      meeting_place: "hall de votre hôtel ou tout autre lieu de votre choix",
      inclusions: ["Prise en charge à l'hôtel", "Guide touristique", "Frais du guide touristique pendant la visite"],
      exclusions: ["Transport", "Repas", "Frais d'entrée"],
      options: [
        {
          duration_type: "Journée complète",
          duration: "8 heures",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 60, 30, 30, 30, 30, 30],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Demi-journée",
          duration: "4 heures",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 40, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7",
        },
      ],
      capacidad: "7",
      image: "/images/tours/discover_kyoto.jpg",
    },
    {
      name: "MÉTROPOLE D'OSAKA",
      type: "Visite privée",
      location: "Osaka",
      meeting_place: "hall de votre hôtel ou tout autre endroit de votre choix",
      options: [
        {
          duration_type: "Journée complète",
          duration: "8 heures",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 60, 30, 30, 30, 30, 30],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Demi-journée",
          duration: "4 heures",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 40, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7",
        },
      ],
      inclusions: [
        "Prise en charge à l'hôtel",
        "Guide touristique",
        "Dépenses du guide touristique pendant la visite",
      ],
      exclusions: ["Transport", "Repas", "Frais d'entrée"],
      image: "/images/tours/osaka_metropolis.jpg",
    },
    {
      name: "NARA, TRADITION ET NATURE DÉVOILÉE",
      type: "Visite privée",
      location: "Nara ou Nara et Kyoto",
      meeting_place: "hall de votre hôtel ou tout autre endroit de votre choix",
      options: [
        {
          duration_type: "Journée complète",
          duration: "8 heures",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 60, 30, 30, 30, 30, 30],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7 ",
        },
        {
          duration_type: "Demi-journée",
          duration: "4 heures",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 40, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7 ",
        },
      ],
      inclusions: [
        "Prise en charge à l'hôtel",
        "Guide touristique",
        "Dépenses du guide touristique pendant la visite",
      ],
      exclusions: ["Transportation", "Meals", "Entrance fees"],
      image: "/images/tours/nara_unvelied.jpg",
    },
  ]
};

export const ToursImages = [
  { id: 1, url: "/images/tours/tour_image_1.jpg" },
  { id: 2, url: "/images/tours/tour_image_2.jpg" },
  { id: 3, url: "/images/tours/tour_image_3.jpg" },
  { id: 4, url: "/images/tours/tour_image_4.jpg" },
  { id: 5, url: "/images/tours/tour_image_5.jpg" },
  { id: 6, url: "/images/tours/tour_image_6.jpg" },
  { id: 7, url: "/images/tours/tour_image_7.jpg" },
  { id: 8, url: "/images/tours/tour_image_8.jpg" },
  { id: 9, url: "/images/tours/tour_image_9.jpg" },
  { id: 10, url: "/images/tours/tour_image_10.jpg" },
  { id: 11, url: "/images/tours/tour_image_11.jpg" },
  { id: 12, url: "/images/tours/tour_image_12.jpg" },
  { id: 13, url: "/images/tours/tour_image_13.jpg" },
  { id: 14, url: "/images/tours/tour_image_14.jpg" },
  { id: 15, url: "/images/tours/tour_image_15.jpg" },
  { id: 16, url: "/images/tours/tour_image_16.jpg" },
  { id: 17, url: "/images/tours/tour_image_17.jpg" },
  { id: 18, url: "/images/tours/tour_image_18.jpg" },
  { id: 19, url: "/images/tours/tour_image_19.jpg" },
  { id: 20, url: "/images/tours/tour_image_20.jpg" },
  { id: 21, url: "/images/tours/tour_image_21.jpg" },
  { id: 22, url: "/images/tours/tour_image_22.jpg" },
  { id: 23, url: "/images/tours/tour_image_23.jpg" },
  { id: 24, url: "/images/tours/tour_image_24.jpg" },
  { id: 25, url: "/images/tours/tour_image_25.jpg" },
  { id: 26, url: "/images/tours/tour_image_26.jpg" },
  { id: 27, url: "/images/tours/tour_image_27.jpg" },
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
  ],
  it: [
    {
      question: "Come posso prenotare un tour?",
      answer: "Puoi prenotare un tour tramite la nostra pagina dei Tour o contattandoci direttamente via email o telefono."
    },
    {
      question: "I tour sono in spagnolo?",
      answer: "Sì, offriamo tour in spagnolo con guide locali che parlano fluentemente la lingua."
    },
    {
      question: "Qual è la politica di cancellazione?",
      answer: "Offriamo cancellazione gratuita fino a 48 ore prima dell'inizio del tour. Per maggiori dettagli, consulta la nostra politica di cancellazione."
    },
    {
      question: "I tour sono adatti ai bambini?",
      answer: "La maggior parte dei nostri tour è adatta a tutte le età. Indichiamo nella descrizione di ciascun tour se ci sono restrizioni di età."
    },
    {
      question: "Cosa dovrei portare ai tour?",
      answer: "Consigliamo di portare abbigliamento e scarpe comode, crema solare, acqua e una fotocamera. A seconda del tour, potremmo suggerire articoli aggiuntivi."
    },
    {
      question: "Offrite tour privati?",
      answer: "Sì, offriamo tour privati personalizzati per piccoli gruppi o famiglie. Contattaci per maggiori informazioni."
    }
  ],
  fr: [
    {
      question: "Comment puis-je réserver un tour ?",
      answer: "Vous pouvez réserver un tour via notre page de Tours ou en nous contactant directement par e-mail ou téléphone."
    },
    {
      question: "Les tours sont-ils en espagnol ?",
      answer: "Oui, nous proposons des tours en espagnol avec des guides locaux qui parlent couramment la langue."
    },
    {
      question: "Quelle est la politique d'annulation ?",
      answer: "Nous proposons une annulation gratuite jusqu'à 48 heures avant le début du tour. Pour plus de détails, consultez notre politique d'annulation."
    },
    {
      question: "Les tours sont-ils adaptés aux enfants ?",
      answer: "La plupart de nos tours conviennent à tous les âges. Nous indiquons dans la description de chaque tour s'il y a des restrictions d'âge."
    },
    {
      question: "Que dois-je apporter aux tours ?",
      answer: "Nous vous recommandons d'apporter des vêtements et des chaussures confortables, de la crème solaire, de l'eau et un appareil photo. Selon le tour, nous pourrions suggérer des articles supplémentaires."
    },
    {
      question: "Proposez-vous des tours privés ?",
      answer: "Oui, nous proposons des tours privés personnalisés pour les petits groupes ou les familles. Contactez-nous pour plus d'informations."
    }
  ]
};


export const GalleryImages = [
  { id: 1, url: "/images/gallery/gallery_image_1.jpg" },
  { id: 2, url: "/images/gallery/gallery_image_2.jpg" },
  { id: 3, url: "/images/gallery/gallery_image_3.jpg" },
  { id: 4, url: "/images/gallery/gallery_image_4.jpg" },
  { id: 5, url: "/images/gallery/gallery_image_5.jpg" },
  { id: 6, url: "/images/gallery/gallery_image_6.jpg" },
  { id: 7, url: "/images/gallery/gallery_image_7.jpg" },
  { id: 8, url: "/images/gallery/gallery_image_8.jpg" },
  { id: 9, url: "/images/gallery/gallery_image_9.jpg" },
  { id: 10, url: "/images/gallery/gallery_image_10.jpg" },
  { id: 11, url: "/images/gallery/gallery_image_11.jpg" },
  { id: 12, url: "/images/gallery/gallery_image_12.jpg" },
  { id: 13, url: "/images/gallery/gallery_image_13.jpg" },
  { id: 14, url: "/images/gallery/gallery_image_14.jpg" },
  { id: 15, url: "/images/gallery/gallery_image_15.jpg" },
  { id: 16, url: "/images/gallery/gallery_image_16.jpg" },
  { id: 17, url: "/images/gallery/gallery_image_17.jpg" },
  { id: 18, url: "/images/gallery/gallery_image_18.jpg" },
  { id: 19, url: "/images/gallery/gallery_image_19.jpg" },
  { id: 20, url: "/images/gallery/gallery_image_20.jpg" },
  { id: 21, url: "/images/gallery/gallery_image_21.jpg" },
  { id: 22, url: "/images/gallery/gallery_image_22.jpg" },
  { id: 23, url: "/images/gallery/gallery_image_23.jpg" },
  { id: 24, url: "/images/gallery/gallery_image_24.jpg" },
  { id: 25, url: "/images/gallery/gallery_image_25.jpg" },
  { id: 26, url: "/images/gallery/gallery_image_26.jpg" },
  { id: 27, url: "/images/gallery/gallery_image_27.jpg" },
  { id: 28, url: "/images/gallery/gallery_image_28.jpg" },
  { id: 29, url: "/images/gallery/gallery_image_29.jpg" },
  { id: 30, url: "/images/gallery/gallery_image_10.jpg" },
  { id: 31, url: "/images/gallery/gallery_image_11.jpg" },
  { id: 32, url: "/images/gallery/gallery_image_12.jpg" },
  { id: 33, url: "/images/gallery/gallery_image_13.jpg" },
  { id: 34, url: "/images/gallery/gallery_image_14.jpg" },
  { id: 35, url: "/images/gallery/gallery_image_15.jpg" },

];

export const Navegacion = {
  es: [
    { id: 1, text: 'Inicio', link: '/home' },
    { id: 2, text: 'Tours', link: '/tours' },
    { id: 5, text: 'Preguntas frecuentes', link: '/faqs' },
    { id: 3, text: 'Contactenos', link: '/contact' },
    { id: 4, text: 'Quienes somos', link: '/about' },
    { id: 5, text: 'Galeria', link: '/gallery' },
  ],
  en: [
    { id: 1, text: 'Home', link: '/home' },
    { id: 2, text: 'Tours', link: '/tours' },
    { id: 5, text: 'FAQs', link: '/faqs' },
    { id: 3, text: 'Contact', link: '/contact' },
    { id: 4, text: 'About', link: '/about' },
    { id: 5, text: 'Gallery', link: '/gallery' },
  ],
  fr: [
    { id: 1, text: 'Accueil', link: '/home' },
    { id: 2, text: 'Tours', link: '/tours' },
    { id: 5, text: 'FAQs', link: '/faqs' },
    { id: 3, text: 'Contact', link: '/contact' },
    { id: 4, text: 'À propos', link: '/about' },
    { id: 5, text: 'Galerie', link: '/gallery' },
  ],
  it: [
    { id: 1, text: 'Home', link: '/home' },
    { id: 2, text: 'Tours', link: '/tours' },
    { id: 5, text: 'FAQs', link: '/faqs' },
    { id: 3, text: 'Contatti', link: '/contact' },
    { id: 4, text: 'Chi siamo', link: '/about' },
    { id: 5, text: 'Galleria', link: '/gallery' },
  ],
};
