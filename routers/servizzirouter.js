const express = require("express");
const req = require("express/lib/request");

const router = express.Router();
const controllers = require("../controllers/servizzicontrollers.js");

router.get("/",controllers.getservizzi);  
module.exports = router;   
router.post("/aggungi", controllers.agungisevizzio);
router.delete("/cancella", controllers.cancellasevizzio);
router.put("/modifica", controllers.modificasevizzio);
