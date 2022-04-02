
const express = require("express");
const router = express.Router();

const mainControllers = require("../controllers/mainControllers");



router.get("/", mainControllers.home );

router.get("/formLogin", mainControllers.formLogin);
  
router.get("/registro", mainControllers.registro);

router.get("/producto", mainControllers.producto);


module.exports = router


