const express = require("express");
const { link } = require("fs");

const app = express()

app.use(express.static("public"));
const path = require("path")

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => console.log("running on port 3001"));


app.listen(3001, () => {

    console.log("el servidor esta corriendo en puerto 3001");
})

app.get("/",(req,res) =>{

 res.sendFile(path.resolve(__dirname, "./views/home.html")) })


 app.get("/FormLogin",(req,res) =>{

    res.sendFile(path.resolve(__dirname, "./views/FormLogin.html"))} )
    
    
    
    app.get("/Registro",(req,res) =>{

        res.sendFile(path.resolve(__dirname, "./views/Registro.html"))
        
        }) ;
    

    
     

            app.get("/Producto",(req,res) =>{

                res.sendFile(path.resolve(__dirname, "./views/Producto.html"))
                
                }) ;


                