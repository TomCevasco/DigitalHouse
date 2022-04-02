const path = require("path");


const mainController = {

    home: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/home.html"));
      },
      formLogin: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/formLogin.html"));
      },
      registro: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/registro.html"));
      },

      producto: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/producto.html"));
      },

     


}


module.exports = mainController