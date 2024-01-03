import uuidGenerator from "../utils/uuidGenerator.mjs";

const deportes = [
  {
    id: uuidGenerator(),
    deporte: "Fútbol",
    paragraph:
      "El fútbol es un deporte de equipo que se juega con un balón en un campo rectangular. El objetivo es marcar goles en la portería contraria.",
    rules:
      "Las reglas básicas del fútbol incluyen no tocar el balón con las manos, no cometer faltas graves y evitar el fuera de juego.",
    principleStars: ["Lionel Messi", "Cristiano Ronaldo", "Neymar Jr."],
    numberPlayers: 11,
    additionalInfo: {
      origen: "Inglaterra",
      mundialmentePopular: true,
    },
  },
  {
    id: uuidGenerator(),
    deporte: "Baloncesto",
    paragraph:
      "El baloncesto es un deporte de equipo que se juega en una cancha rectangular. El objetivo es anotar puntos lanzando una pelota a través del aro del equipo contrario.",
    rules:
      "Las reglas básicas del baloncesto incluyen driblar el balón mientras se mueve, no correr sin botar el balón y evitar cometer faltas personales.",
    principleStars: ["Michael Jordan", "LeBron James", "Kobe Bryant"],
    numberPlayers: 5,
    additionalInfo: {
      origen: "Estados Unidos",
      alturaAro: "3.05 metros",
    },
  },
  {
    id: uuidGenerator(),
    deporte: "Tenis",
    paragraph:
      "El tenis es un deporte individual o de parejas que se juega con raquetas y una pelota en una pista rectangular. El objetivo es hacer que la pelota pase por encima de la red y caiga dentro del campo contrario.",
    rules:
      "Las reglas del tenis incluyen golpear la pelota antes de que rebote dos veces, evitar que la pelota salga del campo y seguir las pautas de conducta adecuadas.",
    principleStars: ["Roger Federer", "Rafael Nadal", "Novak Djokovic"],
    numberPlayers: 1,
    additionalInfo: {
      superficies: ["Césped", "Arcilla", "Pista dura"],
      grandSlams: 4,
    },
  },
  {
    id: uuidGenerator(),
    deporte: "Atletismo",
    paragraph:
      "El atletismo es un deporte que incluye una variedad de disciplinas individuales, como carreras, saltos y lanzamientos. Los atletas compiten en diferentes pruebas para lograr la máxima velocidad, resistencia, altura o distancia.",
    rules:
      "Las reglas del atletismo varían según cada disciplina, pero generalmente implican completar la prueba en el menor tiempo posible, saltar o lanzar dentro de las áreas designadas y seguir las reglas específicas de cada disciplina.",
    principleStars: ["Usain Bolt", "Allyson Felix", "Yelena Isinbayeva"],
    numberPlayers: "Varía según la disciplina",
    additionalInfo: {
      disciplinas: [
        "Carreras de velocidad",
        "Saltos",
        "Lanzamientos",
        "Carreras de fondo",
      ],
    },
  },
  {
    id: uuidGenerator(),
    deporte: "Natación",
    paragraph:
      "La natación es un deporte individual o de equipo que se realiza en el agua. Los nadadores compiten en diferentes estilos de natación, como estilo libre, espalda, pecho y mariposa, con el objetivo de completar la distancia más rápido.",
    rules:
      "Las reglas de la natación incluyen nadar dentro de los carriles designados, tocar la pared al dar vuelta y evitar acciones que brinden una ventaja injusta.",
    principleStars: ["Michael Phelps", "Katie Ledecky", "Caeleb Dressel"],
    numberPlayers: "Varía según la prueba y el estilo de relevo",
    additionalInfo: {
      estilosNatacion: [
        "Estilo libre",
        "Espalda",
        "Pecho",
        "Mariposa",
        "Combinado individual",
      ],
      piscinas: ["Piscina olímpica (50 metros)", "Piscina corta (25 metros)"],
    },
  },
  {
    id: uuidGenerator(),
    deporte: "Voleibol",
    paragraph:
      "El voleibol es un deporte de equipo que se juega en una cancha dividida por una red. El objetivo es pasar la pelota por encima de la red y hacer que toque el suelo en el campo contrario.",
    rules:
      "Las reglas básicas del voleibol incluyen no tocar la red, no golpear la pelota dos veces seguidas y no invadir el campo contrario.",
    principleStars: ["Karch Kiraly", "Giba", "Kerri Walsh Jennings"],
    numberPlayers: 6,
    additionalInfo: {
      posiciones: ["Colocador", "Atacante", "Libero", "Central"],
    },
  },
  // Agregar más objetos de deportes aquí...
];

export default deportes;
