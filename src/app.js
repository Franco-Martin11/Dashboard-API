const app = express();
import express from "express";
import deportes from "./schemas/index.mjs";

app.use(express.json());

// Configuración de los encabezados CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Datos de ejemplo (simulando una base de datos)
let usuarios = [
  { id: 1, nombre: "Juan", edad: 25 },
  { id: 2, nombre: "María", edad: 30 },
  { id: 3, nombre: "Pedro", edad: 28 },
];

const ProjectExampleData = [
  {
    descriptions: {
      numberProject: 10,
      title: "Project",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum commodi dolor impedit. Tempora non asperiores soluta commodi dolorum inventore earum magni?.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum commodi dolor impedit. Tempora non asperiores soluta commodi dolorum inventore earum magni?",
    },
    image: {
      srcUrl: "image5.jpg",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: "FaLink",
        route: "/ruta1",
        id: 1,
        title: "Deploy",
      },
      {
        icon: "FaGithubSquare",
        route: "/ruta2",
        id: 2,
        title: "Repository",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 11,
      title: "Project",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum commodi dolor impedit. Tempora non asperiores soluta commodi dolorum inventore earum magni?.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum commodi dolor impedit. Tempora non asperiores soluta commodi dolorum inventore earum magni?",
    },
    image: {
      srcUrl: "image6.jpg",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: "FaLink",
        route: "/ruta1",
        id: 4,
        title: "Deploy",
      },
      {
        icon: "FaGithubSquare",
        route: "/ruta2",
        id: 5,
        title: "Repository",
      },
    ],
  },
];
// Ruta GET para obtener todos los usuarios
app.get("/project", (req, res) => {
  setTimeout(() => {
    res.json(deportes);
  }, 3000);
});

// Ruta GET para obtener un usuario por su ID
app.get("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    res.status(404).json({ mensaje: "Usuario no encontrado" });
  } else {
    res.json(usuario);
  }
});

// Ruta POST para crear un nuevo usuario
app.post("/usuarios", (req, res) => {
  const nuevoUsuario = req.body;
  usuarios.push(nuevoUsuario);

  res.status(201).json(nuevoUsuario);
});

// Ruta PUT para actualizar un usuario existente
app.put("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const usuarioActualizado = req.body;

  let usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    res.status(404).json({ mensaje: "Usuario no encontrado" });
  } else {
    usuario = { ...usuario, ...usuarioActualizado };
    res.json(usuario);
  }
});

// Ruta DELETE para eliminar un usuario
app.delete("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  usuarios = usuarios.filter((u) => u.id !== id);

  res.sendStatus(204);
});

// Iniciar el servidor en el puerto 5173
app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
