// const bodyParser = require('body-parser');
// const express = require('express');
import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

let usuarios = [
  { id: 1, nombre: "Juan", edad: 25 },
  { id: 2, nombre: "María", edad: 30 },
  { id: 3, nombre: "Pedro", edad: 28 },
];

app.get("/project", (req, res) => {
  setTimeout(() => {
    res.json(usuarios);
  }, 3000);
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
