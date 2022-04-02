const express = require("express");
const router = express.Router();


const productoController = require("../controllers/productControllers");

router.get("/producto", productoController.producto);


module.exports = router ;

