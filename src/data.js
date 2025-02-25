export const destinos = {
  es: [
    {
      id: 1,
      city: "Kioto",
      description:
        "Déjanos mostrarte la capital cultural de Japón! Desde monumentos emblemáticos como el Castillo de Nijo, Fushimi Inari, Kyomizudera o el Pabellon de Oro hasta lugares más secretos cuyos nombres quizás nunca hayas oído antes, te brindaremos información sobre detalles que no encontrarás en Internet",
      image: process.env.PUBLIC_URL + "/images/destinos/Kyoto_image.jpg",
    },
    {
      id: 2,
      city: "Osaka",
      description:
        "Vamos a pasear juntos por las calles de esta increíble ciudad. Visitaremos lugares emblemáticos como el Castillo de Osaka, el área de Shinsekai o la calle Dotombori, pero también nos ocuparemos de mostrarte lugares ocultos y hablar sobre características que conocemos por vivir aquí durante años",
      image: process.env.PUBLIC_URL + "/images/destinos/osaka_image.jpg",
    },
    {
      id: 3,
      city: "Nara",
      description:
        "Perfecto para pasear por un parque muy amplio y lleno ciervos a los que podremos tocar y dar de comer, como tambien visitar el monumental templo Todai-ji. Añadiendo también lugares fuera de lo común. En caso de solicitarlo también podríamos pasar la mitad del día en Nara y la otra mitad en Kioto",
      image: process.env.PUBLIC_URL + "/images/destinos/nara_image.jpg",
    },
  ],
  en: [
    {
      id: 1,
      city: "Kyoto",
      description:
        "Let us show you the cultural capital of Japan! From iconic landmarks such as The Fushimi Inari, Nijo Castle or the Golden Pavilion to secret gems and locations which names you may have never heard before, we’ll provide you information on details that you won’t find on the internet",
      image: process.env.PUBLIC_URL + "/images/destinos/Kyoto_image.jpg",
    },
    {
      id: 2,
      city: "Osaka",
      description:
        "Let’s hang out together through the streets of this amazing city. We will visit The Osaka Castle, Shinsekai area, Dotombori Street and other must see locations, but we will also take care to show you hidden sites and talk about aspects that we know by living here for years",
      image: process.env.PUBLIC_URL + "/images/destinos/osaka_image.jpg",
    },
    {
      id: 3,
      city: "Nara",
      description:
        "Perfect for a walk in a park full of space and deers that we can touch and feed, and to visit the monumental Todai-ji temple. Adding as well off the beaten path locations. In case you want, we could also spend half of the day in Nara and the other half in Kyoto",
      image: process.env.PUBLIC_URL + "/images/destinos/nara_image.jpg",
    },
  ],
  it: [
    {
      id: 1,
      city: "Kioto",
      description:
        "Lascia che ti mostriamo la capitale culturale del Giappone! Dai luoghi iconici come Fushimi Inari, il Castello di Nijo o il Padiglione d'Oro ai tesori nascosti e ai luoghi di cui potresti non aver mai sentito parlare, ti forniremo informazioni su dettagli che non troverai su Internet",
      image: process.env.PUBLIC_URL + "/images/destinos/Kyoto_image.jpg",
    },
    {
      id: 2,
      city: "Osaka",
      description:
        "Passeggiamo insieme per le strade di questa città incredibile. Visiteremo il Castello di Osaka, l'area di Shinsekai, la via Dotombori e altre località da non perdere, ma ci assicureremo anche di mostrarti siti nascosti e di parlare di aspetti che conosciamo vivendo qui da anni",
      image: process.env.PUBLIC_URL + "/images/destinos/osaka_image.jpg",
    },
    {
      id: 3,
      city: "Nara",
      description:
        "Perfetto per una passeggiata in un parco spazioso pieno di cervi che possiamo toccare e nutrire, e per visitare il monumentale tempio Todai-ji. Aggiungendo anche località fuori dai percorsi tradizionali. Se vuoi, potremmo anche passare metà giornata a Nara e l'altra metà a Kyoto.",
      image: process.env.PUBLIC_URL + "/images/destinos/nara_image.jpg",
    },
  ],
  fr: [
    {
      id: 1,
      city: "Kyoto",
      description:
        "Laissez-nous vous montrer la capitale culturelle du Japon ! Des sites emblématiques comme Fushimi Inari, le Château de Nijō ou le Pavillon d'Or aux joyaux secrets et aux endroits dont les noms ne vous sont peut-être jamais parvenus, nous vous fournirons des informations sur des détails que vous ne trouverez pas sur Internet",
      image: process.env.PUBLIC_URL + "/images/destinos/Kyoto_image.jpg",
    },
    {
      id: 2,
      city: "Osaka",
      description:
        "Flânons ensemble dans les rues de cette ville incroyable. Nous visiterons le Château d'Osaka, le quartier de Shinsekai, la rue de Dotombori et d'autres sites incontournables, mais nous nous assurerons également de vous montrer des lieux cachés et de discuter d'aspects que nous connaissons grâce à notre vie ici depuis des années",
      image: process.env.PUBLIC_URL + "/images/destinos/osaka_image.jpg",
    },
    {
      id: 3,
      city: "Nara",
      description:
        "Parfait pour une promenade dans un parc spacieux plein de cerfs que nous pouvons toucher et nourrir, et pour visiter le monumental temple Todai-ji. En ajoutant également des lieux hors des sentiers battus. Si vous le souhaitez, nous pourrions également passer la moitié de la journée à Nara et l'autre moitié à Kyoto.",
      image: process.env.PUBLIC_URL + "/images/destinos/nara_image.jpg",
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
          adults: [360, 40, 20, 20, 20, 20, 20],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Medio día",
          duration: "4 horas",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 20, 20, 20, 20, 20, 20],
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
      image: process.env.PUBLIC_URL + "/images/tours/discover_kyoto.jpg",
    },
    {
      name: "GION MÁGICO; RECORRIDO NOCTURNO",
      type: "Recorrido Nocturno",
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
      image: process.env.PUBLIC_URL + "/images/tours/magical_gion.jpg",
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
          adults: [360, 40, 20, 20, 20, 20, 20],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Medio día",
          duration: "4 horas",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 20, 20, 20, 20, 20, 20],
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
      image: process.env.PUBLIC_URL + "/images/tours/osaka_metropolis.jpg",
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
          adults: [360, 40, 20, 20, 20, 20, 20],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Medio día",
          duration: "4 horas",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [200, 20, 20, 20, 20, 20, 20],
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
      image: process.env.PUBLIC_URL + "/images/tours/nara_unvelied.jpg",
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
          adults: [360, 40, 20, 20, 20, 20, 20],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Half day tour",
          duration: "4 hours",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 20, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7",
        },
      ],
      capacidad: "7",
      image: process.env.PUBLIC_URL + "/images/tours/discover_kyoto.jpg",
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
      image: process.env.PUBLIC_URL + "/images/tours/magical_gion.jpg",
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
          adults: [360, 40, 20, 20, 20, 20, 20],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Half day tour ",
          duration: "4 hours",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 20, 20, 20, 20, 20, 20],
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
      image: process.env.PUBLIC_URL + "/images/tours/osaka_metropolis.jpg",
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
          adults: [360, 40, 20, 20, 20, 20, 20],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7 ",
        },
        {
          duration_type: "Half day tour ",
          duration: "4 hours",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 20, 20, 20, 20, 20, 20],
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
      image: process.env.PUBLIC_URL + "/images/tours/nara_unvelied.jpg",
    },
  ],
  it: [
    {
      name: "SCOPRI KYOTO",
      type: "Tour privato",
      location: "Kyoto",
      meeting_place: "hall del tuo hotel o qualsiasi altra posizione tu preferisca",
      inclusions: ["Ritiro in hotel", "Guida turistica", "Spese per la guida turistica durante il tour"],
      exclusions: ["Trasporto", "Pasti", "Biglietti d'ingresso"],
      options: [
        {
          duration_type: "Intera giornata",
          duration: "8 ore",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 40, 20, 20, 20, 20, 20],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Mezza giornata",
          duration: "4 ore",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 20, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7",
        },
      ],
      capacidad: "7",
      image: process.env.PUBLIC_URL + "/images/tours/discover_kyoto.jpg",
    },    
    {
      name: "METROPOLI DI OSAKA",
      type: "Tour privato",
      location: "Osaka",
      meeting_place: "nella hall del tuo hotel o in qualsiasi altro luogo tu preferisca",
      options: [
        {
          duration_type: "Intera giornata",
          duration: "8 ore",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 40, 20, 20, 20, 20, 20],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Mezza giornata",
          duration: "4 ore",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 20, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7",
        },
      ],
      inclusions: [
        "Pick-up in hotel",
        "Guida turistica",
        "Spese della guida turistica durante il tour",
      ],
      exclusions: ["Trasporto", "Pasti", "Costi di ingresso"],
      image: process.env.PUBLIC_URL + "/images/tours/osaka_metropolis.jpg",
    },
    {
      name: "NARA, TRADIZIONE E NATURA SVELATE",
      type: "Tour privato",
      location: "Nara o Nara e Kyoto",
      meeting_place: "nella hall del tuo hotel o in qualsiasi altro luogo tu preferisca ",
      options: [
        {
          duration_type: "Intera giornata",
          duration: "8 ore",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 40, 20, 20, 20, 20, 20],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7 ",
        },
        {
          duration_type: "Mezza giornata",
          duration: "4 ore",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 20, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7 ",
        },
      ],
      inclusions: [
        "Pick-up in hotel",
        "Guida turistica",
        "Spese della guida turistica durante il tour",
      ],
      exclusions: ["Trasporto", "Pasti ", "Costi di ingresso"],
      image: process.env.PUBLIC_URL + "/images/tours/nara_unvelied.jpg",
    },
  ],
  fr: [
    {
      name: "DÉCOUVRIR KYOTO",
      type: "Visite privée",
      location: "Kyoto",
      meeting_place: "le hall de votre hôtel ou tout autre lieu de votre choix",
      inclusions: ["Prise en charge à l'hôtel", "Guide touristique", "Frais du guide touristique pendant la visite"],
      exclusions: ["Transport", "Repas", "Frais d'entrée"],
      options: [
        {
          duration_type: "Journée complète",
          duration: "8 heures",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 40, 20, 20, 20, 20, 20],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Demi-journée",
          duration: "4 heures",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 20, 20, 20, 20, 20, 20],
          children: [10, 10, 10, 10, 10, 10],
          capacity: "7",
        },
      ],
      capacidad: "7",
      image: process.env.PUBLIC_URL + "/images/tours/discover_kyoto.jpg",
    },
    {
      name: "MÉTROPOLIS D'OSAKA",
      type: "Visite privée",
      location: "Osaka",
      meeting_place: "le hall de votre hôtel ou tout autre lieu de votre choix",
      options: [
        {
          duration_type: "Journée complète",
          duration: "8 heures",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 40, 20, 20, 20, 20, 20],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7",
        },
        {
          duration_type: "Demi-journée",
          duration: "4 heures",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 20, 20, 20, 20, 20, 20],
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
      image: process.env.PUBLIC_URL + "/images/tours/osaka_metropolis.jpg",
    },
    {
      name: "NARA, TRADITION ET NATURE DÉVOILÉE",
      type: "Visite privée",
      location: "Nara ou Nara et Kyoto",
      meeting_place: "le hall de votre hôtel ou tout autre lieu de votre choix",
      options: [
        {
          duration_type: "Journée complète",
          duration: "8 heures",
          price: ["34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY", "34,000 JPY",],
          adults: [360, 40, 20, 20, 20, 20, 20],
          children: [20, 20, 20, 20, 20, 20],
          capacity: "7 ",
        },
        {
          duration_type: "Demi-journée",
          duration: "4 heures",
          price: ["17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY", "17,000 JPY",],
          adults: [200, 20, 20, 20, 20, 20, 20],
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
      image: process.env.PUBLIC_URL + "/images/tours/nara_unvelied.jpg",
    },
  ]
};

export const ToursImages = [
  { id: 1, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_1.jpg" },
  { id: 2, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_2.jpg" },
  { id: 3, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_3.jpg" },
  { id: 4, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_4.jpg" },
  { id: 5, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_5.jpg" },
  { id: 6, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_6.jpg" },
  { id: 7, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_7.jpg" },
  { id: 8, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_8.jpg" },
  { id: 9, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_9.jpg" },
  { id: 10, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_10.jpg" },
  { id: 11, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_11.jpg" },
  { id: 12, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_12.jpg" },
  { id: 13, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_13.jpg" },
  { id: 14, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_14.jpg" },
  { id: 15, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_15.jpg" },
  { id: 16, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_16.jpg" },
  { id: 17, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_17.jpg" },
  { id: 18, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_18.jpg" },
  { id: 19, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_19.jpg" },
  { id: 20, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_20.jpg" },
  { id: 21, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_21.jpg" },
  { id: 22, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_22.jpg" },
  { id: 23, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_23.jpg" },
  { id: 24, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_24.jpg" },
  { id: 25, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_25.jpg" },
  { id: 26, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_26.jpg" },
  { id: 27, url: process.env.PUBLIC_URL + process.env.PUBLIC_URL + "/images/tours/tour_image_27.jpg" },
];

export const FAQData = {
  es: [
    {
      question: "¿Cómo puedo reservar un tour?",
      answer: "Puedes reservar un tour a través de nuestra página de Tours contactándonos directamente por correo electrónico, WhatsApp o teléfono."
    },
    {
      question: "¿Ofrecen tours privados?",
      answer: "Sí, ofrecemos tours privados personalizados para grupos pequeños. Contáctanos para más información."
    },
    {
      question: "¿El Tour de Gion es privado?",
      answer: "No, ese es el único tour que es público; hasta diez miembros."
    },
    {
      question: "¿Podemos contar con la asistencia del guía para obtener información además de la del tour?",
      answer: "¡Sí! Es un servicio que nos gusta ofrecer (sin cargo) antes y después del tour."
    },
    {
      question: "¿La tarifa cambia según la cantidad de personas en un tour?",
      answer: "Sí, no muy significativamente, pero hay algunas diferencias que puedes consultar en la página de Tours. Contáctanos para más información."
    },
    {
      question: "¿Cuánto tiempo duran los tours?",
      answer: "Los tours de un día completo son de 8 horas y los de medio día 4 horas. Sin embargo, podemos hablar y negociar en caso de que desees una cantidad específica de horas."
    },
    {
      question: "¿Son los tours adecuados para niños?",
      answer: "La mayoría de nuestros tours son adecuados para todas las edades, desde adultos hasta familias con bebés, adolescentes, etc. De hecho, personalizaremos el tour para que sea más adecuado para los viajeros con los que estamos. Contáctanos para más información."
    },
    {
      question: "¿En qué idioma son los tours?",
      answer: "Ofrecemos tours en inglés, español, francés e italiano."
    },
    {
      question: "¿Cómo nos moveremos durante el tour?",
      answer: "Caminando y utilizando el transporte público como metro, trenes o autobuses. En algunos momentos podemos tomar taxis si lo prefieres. En caso de que no quieras caminar o tengas alguna limitación, podemos usar solo taxis o contratar transporte privado. Hay lugares con calles estrechas donde los vehículos no pueden acceder y caminar es la única opción, pero podemos evitarlos en cierta medida si lo prefieres."
    },
    {
      question: "¿Tenemos que pagar los gastos del guía durante el tour?",
      answer: "No, no tienes que pagar al guía por los gastos de boletos, comida o transporte público. La única excepción sería en caso de usar taxi o transporte privado."
    },
    {
      question: "¿Qué debo llevar para el tour?",
      answer: "Recomendamos llevar ropa y zapatos cómodos, algo de dinero en efectivo, agua y una cámara. Dependiendo del tour, la temporada y las condiciones climáticas, podemos sugerir artículos adicionales como protector solar o paraguas."
    }
  ],
  en: [
    {
      question: "How can I book a tour?",
      answer: "You can book a Tour through our Tours page by contacting us directly via email, whatsapp or phone"
    },
    {
      question: "Do you offer private tours?",
      answer: "Yes, we offer personalized private tours for small groups. Contact us for more information"
    },
    {
      question: "Is the Gion evening Tour private?",
      answer: "No, that is the only tour that is public; up to ten members"
    },
    {
      question: "Can we count on the guide for assistance and information beside of the tour?",
      answer: "Yes! Is a service that we like to offer(without charge) for before and after the tour"
    },
    {
      question: "Does the rate change by amount of people on a tour?",
      answer: "Yes, not very significantly but there are some differences that you can check at the Tours page. Contact us for more information"
    },
    {
      question: "How long do the tours last?",
      answer: "The Full day tours are 8 hours and Half day tour 4 hours. However we can talk and negotiate in case you might want some other specific amount of hours"
    },
    {
      question: "Are the tours suitable for children?",
      answer: "Most of our tours are suitable for all ages, from advance to middle age, to families with babies, teenagers etc. We will actually customised the tour to make it more suitable for the travellers we are with. Contact us for more information"
    },
    {
      question: "In which language are the tours?",
      answer: "We offer tours in English, Spanish, French and Italian"
    },
    {
      question: "How will we move during the tour?",
      answer: "Walking and public transportation such as subways, trains or buses. At some points we can get taxis if you want. In case you don’t want to walk or you have any limitation we can use only taxis or hire private transportation. There are places with narrow streets where vehicles cannot access and walking is the only option but we can avoid them at a certain degree in case you prefer"
    },
    {
      question: "Do we have to pay for the guide expenses during the tour?",
      answer: "No, you don’t have to pay for the guide for ticket expenses, food or public transportation. The only exception would be in case of using taxi or private transportation"
    },
    {
      question: "What should I bring for the tour?",
      answer: "We recommend bringing comfortable clothing and shoes, some money in cash, water, and a camera. Depending on the tour, season and weather conditions we might suggest additional items such as sunscreen or umbrella"
    }
  ],
  it: [
    {
      question: "Come posso prenotare un tour?",
      answer: "Puoi prenotare un tour attraverso la nostra pagina Tours contattandoci direttamente via email, WhatsApp o telefono."
    },
    {
      question: "Offrite tour privati?",
      answer: "Sì, offriamo tour privati personalizzati per piccoli gruppi. Contattaci per ulteriori informazioni."
    },
    {
      question: "Il Tour di Gion è privato?",
      answer: "No, questo è l'unico tour che è pubblico; fino a dieci membri."
    },
    {
      question: "Possiamo contare sull'assistenza della guida per ottenere informazioni oltre al tour?",
      answer: "Sì! È un servizio che ci piace offrire (senza alcun costo) prima e dopo il tour."
    },
    {
      question: "La tariffa cambia in base al numero di persone in un tour?",
      answer: "Sì, non in modo significativo, ma ci sono alcune differenze che puoi controllare nella pagina Tours. Contattaci per ulteriori informazioni."
    },
    {
      question: "Quanto durano i tour?",
      answer: "I tour di una giornata intera durano 8 ore e i tour di mezza giornata 4 ore. Tuttavia, possiamo parlarne e negoziare nel caso tu voglia una durata specifica."
    },
    {
      question: "I tour sono adatti ai bambini?",
      answer: "La maggior parte dei nostri tour è adatta a tutte le età, da adulti a famiglie con neonati, adolescenti, ecc. In effetti, personalizzeremo il tour per renderlo più adatto ai viaggiatori con cui siamo. Contattaci per ulteriori informazioni."
    },
    {
      question: "In quale lingua sono i tour?",
      answer: "Offriamo tour in inglese, spagnolo, francese e italiano."
    },
    {
      question: "Come ci muoveremo durante il tour?",
      answer: "A piedi e utilizzando i mezzi pubblici come metropolitane, treni o autobus. In alcuni momenti possiamo prendere taxi se lo desideri. Nel caso tu non voglia camminare o abbia qualche limitazione, possiamo utilizzare solo taxi o noleggiare un trasporto privato. Ci sono luoghi con strade strette dove i veicoli non possono accedere e camminare è l'unica opzione, ma possiamo evitarli in una certa misura se lo preferisci."
    },
    {
      question: "Dobbiamo pagare le spese della guida durante il tour?",
      answer: "No, non devi pagare la guida per le spese dei biglietti, cibo o trasporti pubblici. L'unica eccezione sarebbe in caso di utilizzo di taxi o trasporto privato."
    },
    {
      question: "Cosa devo portare per il tour?",
      answer: "Consigliamo di portare abbigliamento e scarpe comode, un po' di denaro in contante, acqua e una macchina fotografica. A seconda del tour, della stagione e delle condizioni atmosferiche, potremmo suggerire articoli aggiuntivi come crema solare o ombrello"
    }
  ],
  fr: [
    {
      question: "Comment puis-je réserver une visite ?",
      answer: "Vous pouvez réserver une visite via notre page des visites en nous contactant directement par e-mail, WhatsApp ou par téléphone."
    },
    {
      question: "Offrez-vous des visites privées ?",
      answer: "Oui, nous offrons des visites privées personnalisées pour les petits groupes. Contactez-nous pour plus d'informations."
    },
    {
      question: "La visite du Gion est-elle privée ?",
      answer: "Non, c'est la seule visite qui est publique ; jusqu'à dix membres."
    },
    {
      question: "Pouvons-nous compter sur l'assistance du guide pour obtenir des informations en plus de la visite ?",
      answer: "Oui ! C'est un service que nous aimons offrir (sans frais) avant et après la visite."
    },
    {
      question: "Le tarif change-t-il selon le nombre de personnes dans une visite ?",
      answer: "Oui, pas de manière significative, mais il y a quelques différences que vous pouvez consulter sur la page des visites. Contactez-nous pour plus d'informations."
    },
    {
      question: "Combien de temps durent les visites ?",
      answer: "Les visites d'une journée complète durent 8 heures et celles d'une demi-journée 4 heures. Cependant, nous pouvons discuter et négocier si vous souhaitez une durée spécifique."
    },
    {
      question: "Les visites conviennent-elles aux enfants ?",
      answer: "La plupart de nos visites conviennent à tous les âges, des adultes aux familles avec des bébés, des adolescents, etc. En fait, nous personnaliserons la visite pour la rendre plus adaptée aux voyageurs avec lesquels nous sommes. Contactez-nous pour plus d'informations."
    },
    {
      question: "Dans quelle langue sont les visites ?",
      answer: "Nous proposons des visites en anglais, espagnol, français et italien."
    },
    {
      question: "Comment nous déplacerons-nous durant la visite ?",
      answer: "À pied et en utilisant les transports publics tels que le métro, les trains ou les bus. À certains moments, nous pouvons prendre des taxis si vous le souhaitez. Si vous ne voulez pas marcher ou avez une limitation, nous pouvons utiliser uniquement des taxis ou engager un transport privé. Il y a des endroits avec des rues étroites où les véhicules ne peuvent pas accéder, et marcher est la seule option, mais nous pouvons les éviter dans une certaine mesure si vous le préférez."
    },
    {
      question: "Devons-nous payer les frais du guide durant la visite ?",
      answer: "Non, vous n'avez pas à payer le guide pour les frais de billets, de nourriture ou de transport public. La seule exception serait en cas d'utilisation d'un taxi ou d'un transport privé."
    },
    {
      question: "Que dois-je apporter pour la visite ?",
      answer: "Nous recommandons d'apporter des vêtements et des chaussures confortables, de l'argent liquide, de l'eau et un appareil photo. En fonction de la visite, de la saison et des conditions météorologiques, nous pourrions suggérer des articles supplémentaires tels que de la crème solaire ou un parapluie."
    }
  ],
};


export const GalleryImages = [
  { id: 1, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_1.jpg" },
  { id: 2, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_2.jpg" },
  { id: 3, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_3.jpg" },
  { id: 4, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_4.jpg" },
  { id: 5, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_5.jpg" },
  { id: 6, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_6.jpg" },
  { id: 7, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_7.jpg" },
  { id: 8, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_8.jpg" },
  { id: 9, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_9.jpg" },
  { id: 10, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_10.jpg" },
  { id: 11, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_11.jpg" },
  { id: 12, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_12.jpg" },
  { id: 13, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_13.jpg" },
  { id: 14, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_14.jpg" },
  { id: 15, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_15.jpg" },
  { id: 16, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_16.jpg" },
  { id: 17, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_17.jpg" },
  { id: 18, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_18.jpg" },
  { id: 19, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_19.jpg" },
  { id: 20, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_20.jpg" },
  { id: 21, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_21.jpg" },
  { id: 22, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_22.jpg" },
  { id: 23, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_23.jpg" },
  { id: 24, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_24.jpg" },
  { id: 25, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_25.jpg" },
  { id: 26, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_26.jpg" },
  { id: 27, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_27.jpg" },
  { id: 28, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_28.jpg" },
  { id: 29, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_29.jpg" },
  { id: 30, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_30.jpg" },
  { id: 31, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_31.jpg" },
  { id: 32, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_32.jpg" },
  { id: 33, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_33.jpg" },
  { id: 34, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_34.jpg" },
  { id: 35, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_35.jpg" },
  { id: 36, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_36.jpg" },
  { id: 37, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_37.jpg" },
  { id: 38, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_38.jpg" },
  { id: 39, url: process.env.PUBLIC_URL + "/images/gallery/gallery_image_39.jpg" },

];

export const Navegacion = {
  es: [
    { id: 1, text: 'Inicio', link: '/home' },
    { id: 2, text: 'Tours', link: '/tours' },
    { id: 3, text: 'Preguntas frecuentes', link: '/faqs' },
    { id: 4, text: 'Contactenos', link: '/contact' },
    { id: 5, text: 'Quienes somos', link: '/about' },
    { id: 6, text: 'Galeria', link: '/gallery' },
  ],
  en: [
    { id: 1, text: 'Home', link: '/home' },
    { id: 2, text: 'Tours', link: '/tours' },
    { id: 3, text: 'FAQs', link: '/faqs' },
    { id: 4, text: 'Contact', link: '/contact' },
    { id: 5, text: 'About', link: '/about' },
    { id: 6, text: 'Gallery', link: '/gallery' },
  ],
  fr: [
    { id: 1, text: 'Accueil', link: '/home' },
    { id: 2, text: 'Tours', link: '/tours' },
    { id: 3, text: 'FAQs', link: '/faqs' },
    { id: 4, text: 'Contact', link: '/contact' },
    { id: 5, text: 'À propos', link: '/about' },
    { id: 6, text: 'Galerie', link: '/gallery' },
  ],
  it: [
    { id: 1, text: 'Home', link: '/home' },
    { id: 2, text: 'Tours', link: '/tours' },
    { id: 3, text: 'FAQs', link: '/faqs' },
    { id: 4, text: 'Contatti', link: '/contact' },
    { id: 5, text: 'Chi siamo', link: '/about' },
    { id: 6, text: 'Galleria', link: '/gallery' },
  ],
};
