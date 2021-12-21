const express = require("express");
const req = require("express/lib/request");

const router = express.Router();
const controllers = require("../controllers/utenticontrollers.js");

router.get("/mostra",controllers.getutenti);  
module.exports = router;   
router.post("/aggungi", controllers.agungiutentec);
router.post("/admin/aggungi",controllers.agungiutented);
router.put("/acesso",controllers.getutente);
router.put("/modifica",controllers.modificautetente)
router.delete("/elimina",controllers.eliminautente)


// express validator aggiunge un midlleware che verifica i parametri ricevuti esiste il parametro sanification i parametri vanno sempre controllati lato rooters
// anche mongoose offre strumenti per valutare dati in mongosse si possono relazionare i dati di diversi modelli con type mongooseschema.types.obgectid,ref:modello da collegare
// per gestire campi esterni ce la funzione populate si puo fare popolare un campo 
/*
*/
