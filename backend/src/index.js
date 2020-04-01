const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(cors())
app.use(express.json());


//iniciando o db
mongoose.connect(
    "mongodb+srv://erickpoleto:12121285a7x@beers-dv82b.mongodb.net/beers?retryWrites=true&w=majority", 
    {useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
    }
);
requireDir("./models")

app.use(routes)

app.listen(3333);