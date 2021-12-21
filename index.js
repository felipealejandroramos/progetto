const express = require("express");
const app = express();
const utentirouter = require("./routers/utentirouter.js");
require("dotenv").config();
cors =require('cors')

app.use(cors({
    origin: '*'
}))
app.use(express.urlencoded({extended: true}));
app.use('/', function(req,res,next){
    console.log(req.method, req.url, req.query, req.body);
    next();
});
app.use('/utenti', utentirouter);



app.listen(process.env.PORT, process.env.HOST, function () {
    
    console.log(" sever avviato in " + process.env.PORT);
    
})