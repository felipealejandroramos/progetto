const req = require("express/lib/request");
const modelli = require("../models/modelsutenti.js")

module.exports ={
    eliminautente: function(req,res){
        modelli.cercautente(req.body, function(err,data){
            if(data){
                modelli.cancellautente(req.body)
                res.send("utente eliminato")
            }
            else{
                res.send("utente inesistente");
            }
        })
    },
    modificautetente: function(req,res){
        modelli.cercautente(req.body, function(err,data){
            if(data){
                modelli.cambiapassword(req.body)
                res.send("password cambiata");
            }
            else{
                res.send("utente inesistente");
            }
        })
    },
    getutente: function(req,res){
        modelli.cercautente(req.body,function(err,dati){
            if(dati){
                modelli.datiutente( req.body, function(err,data){
                    if(data.password===req.body.password)
                        res.send(data)
                    else
                        res.send(false)
            })}
            else 
                res.send(false)
    
    })},
    getutenti: function(req,res){
        modelli.mostrautenti(function(err,data){
            res.send(data);
        });
    },
    agungiutentec: function(req, res){
        modelli.cercautente(req.body, function(err,data){
            if(data){
                res.send("utente gia registrato")
            }
            else{
                modelli.scriviutente(req.body,false,function(data){

                    res.send("utente registrato")
                });
                
                
            }
        });

    

    },
    agungiutented: function(req, res){
        modelli.cercautente(req.body, function(err,data){                                                                        
            if(data)
                res.send("utente gia registrato")
            else{
                modelli.scriviutente(req.body,true);
                res.send("utente aggiunto")
            }
        });

    

    },





}