const express = require("express");
const app = express();


app.use(express.static("public"));
const path = require("path");

// const PORT = process.env.PORT || 3001;

app.listen(3001, () => console.log("running on port 3001"));

 
const rutasHome = require("./routes/main.js");
app.use("/", rutasHome);

const rutasFormLogin = require("./routes/main.js");
app.use("/formLogin", rutasFormLogin);


const rutasRegistro = require("./routes/main.js");
 app.use("/registro", rutasRegistro)

const rutasProducto = require("./routes/main.js");
 app.use("/producto", rutasProducto);






// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./views/home.html"));
//   });

//  app.get("/FormLogin", (req, res) => {
//    res.sendFile(path.resolve(__dirname, "./views/FormLogin.html"));
//  });

//  app.get("/registro", (req, res) => {
//    res.sendFile(path.resolve(__dirname, "./views/registro.html"));
//  });

//  app.get("/producto", (req, res) => {
//      res.sendFile(path.resolve(__dirname, "./views/producto.html"));
//    });
  

//    app.get("/producto/:idProducto", (req, res) => {
//     res.send("Bienvenidos al detalle de producto " + req.params.idProducto);
//   });
 

//   app.get("/producto/:idProducto/comentarios/:idComentario?", (req, res) => {

//     if (req.params.idComentario == undefined) {

//         res.send("Bienvenidos al comentario del producto " + req.params.idProducto)}
    

//     else

//     res.send("Bienvenidos al comentario del producto " + req.params.idProducto + " y estas enfocado en el comentario " + req.params.idComentario)


//   });
 