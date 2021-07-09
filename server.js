const express = require('express');
const app = express();
require('dotenv').config();
const { corsOption, limiter } = require('./middlewares/index')

///CORS
const cors = require('cors');

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(limiter)


//levantamos nuestro servidor
app.listen(process.env.PORT, ()=> {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
})

app.get('/', cors(corsOption), (req, res) => {
  res.status(200).json({
    message: 'Hola mundo desde API'
  })
})