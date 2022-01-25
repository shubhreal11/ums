const express = require('express');

require('dotenv').config({path:'config/config.env'});

const app = express();

app.use(require('./routes'))

app.listen(process.env.APP_PORT , (err)=>{
    if(err){
        console.log( `error on running the server ${err}`);
        return;
    }
    console.log(`server os running on port : ${process.env.APP_PORT}`)
})