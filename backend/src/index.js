const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express();
//iniciando o db
mongoose.connect(
    "mongodb+srv://erickpoleto:12121285a7x@beers-dv82b.mongodb.net/beers?retryWrites=true&w=majority", 
    {useNewUrlParser: true, 
    useCreateIndex: true
    }
);
requireDir("./models")
app.use(express.json());

app.use(routes)

app.listen(3333);