const mongoose = require("mongoose");
const { modificautetente } = require("../controllers/utenticontrollers");
const utentischema = mongoose.Schema({
    email: {type:String,require:true,unique:true},
    password: {type: String, required: true},
    ruolo: {type: String},
    servizi: {type: String}
});
const utentimodel = mongoose.model("user", utentischema);

async function elimina(utente){
    await mongoose.connect("mongodb://127.0.0.1:27017/user");
    utentimodel.deleteOne({email: utente.email},function(err,user){})
};
async function modifica(utente){
    await mongoose.connect("mongodb://127.0.0.1:27017/user");
    utentimodel.updateOne({email: utente.email},{password:utente.password},function(err,user){})
};

async function scrivi(utente, edipendente){
    if(utente.email==null)
        return
    let db = await mongoose.connect("mongodb://127.0.0.1:27017/user");
    
    let novoutente = new utentimodel({email: utente.email , password: utente.password});
    if (edipendente)
        novoutente.ruolo="dipendente";
    else
        novoutente.ruolo="cliente";
    await novoutente.save();
    console.log("scritto "+novoutente);
}
async function leggi(callback){
    await mongoose.connect("mongodb://127.0.0.1:27017/user");
    utentimodel.find(function(err,utenti){
        callback(err,utenti);
    });
}
async function cercadati(utente ,callback){
   
    await mongoose.connect("mongodb://127.0.0.1:27017/user");
    utentimodel.findOne({email: utente.email},function(err,user){
        if(user.password === utente.password)
            callback(false,user)

    
    });
}
async function cerca(utente ,callback){
    await mongoose.connect("mongodb://127.0.0.1:27017/user");
    utentimodel.findOne({email: utente.email},function(err,user){
        let risposta;
        if(user===null)
            risposta=false
            // scrive
        else
            risposta=true;
            // erorre

        callback(err,risposta)
    });
}



//main().catch((error)=> console.log(error));

module.exports = {
    cambiapassword: function(utente){
        modifica(utente)
    },
    cancellautente: function(utente){
        elimina(utente)
    },

    datiutente: function(utente ,callback){
        cercadati(utente,function(err,data){
            if (err) 
                throw err
            callback(false,data)
        })

    },

    cercautente: function(utente ,callback){
        cerca(utente,function(err,data){
            
            callback(false,data);
        })

    },
    mostrautenti: function(callback){
        leggi(function(err,data){
            callback(false,data);
        })
        

    },
    scriviutente: function(utente ,edipendente,callback){
        console.log(utente);
        scrivi(utente, edipendente).catch((error)=> console.log(error));
        callback(true)
        
    },

}