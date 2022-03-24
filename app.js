const express = require("express");
const { link } = require("fs");

const app = express();

app.use(express.static("public"));
const path = require("path");

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("running on port 3001"));


app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/FormLogin", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/FormLogin.html"));
});

app.get("/registro", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/registro.html"));
});

app.get("/producto", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/producto.html"));
  });
  
