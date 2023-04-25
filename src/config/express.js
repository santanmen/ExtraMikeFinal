const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {personalRouter, usersRouter} = require('../modules/controller/routes'); 

const app = express();

app.set("port", process.env.PORT ||3000);
app.use(cors({origins:"*"}));
app.use(express.json({limit:'50mb'}));

app.get('/', (req, rest)=>{
    rest.send("Hola, bienvenido a la casa de Piña")
});

//http://localhost:3000
app.use('/api/personal', personalRouter);
app.use('/api/users', usersRouter);
module.exports = {app};