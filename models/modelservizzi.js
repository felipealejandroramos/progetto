const mongoose = require("mongoose");
const servizzischema = mongoose.Schema({
    nome: {type:String,require:true,unique:true},
    prezzo: {type: String, required: true},
    clienti: {type: String }
});
const servizzimodel = mongoose.model("user", servizzischema);




    
  