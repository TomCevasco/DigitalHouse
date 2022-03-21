const express = require("express");
const { link } = require("fs");

const app = express()

app.use(express.static("public"));
const path = require("path")



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
    

        
    app.get("/Llama",(req,res) =>{

        res.sendFile(path.resolve(__dirname, "./views/Llama.html"))
        
        }) ;


        app.get("/LlamaRegistro",(req,res) =>{

            res.sendFile(path.resolve(__dirname, "./views/LlamaRegistro.html"))
            
            }) ;