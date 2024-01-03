import express from "express";
import bodyParser from "body-parser";
import DB from "./db/DB.mjs";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/project", (req, res) => {
  res.json(DB);
});
app.post("/updateDB", (req, res) => {
  const { body } = req;
  const dataDB = { transaction: [...DB.transaction, body] };
  res.json(dataDB);
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
