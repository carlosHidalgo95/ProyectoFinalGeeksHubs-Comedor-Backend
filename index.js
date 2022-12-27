const express = require('express');
const app = express();
const db = require('./db/db');
require('dotenv').config();

const router = require('./router');

const PORT = process.env.PORT;

//SALTARSE POLITICA CORS DE GOOGLE CHROME PARA PRUEBAS LOCALES CON EL FRONTED
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Authorization,Origin, X-Requested-With, Content-Type, Accept,Access-Control-Request-Method, Access-Control-Request-Headers,Access-Control-Allow-Headers"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD, POST, PUT, PATCH, DELETE,OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(express.json());
app.use(router);

app.listen(PORT,'0.0.0.0', ()=>{
    console.log(`El servidor esta up y alojado en el puerto => ${PORT}`);

    db.sync({force:true}).then(()=> {
        console.log("Conectados a la DB");
    }).catch(error => {
        console.log('Se ha producido un error: ' + error);
    })
})