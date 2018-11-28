const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers.js')

//si la variable PORT no exite, pone 3000, esa variable PORT existe solo en el server de heroku
const ports = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// EXPRESS HBS ENGINE
//registerpartials es para usar plantillas
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/',  (req, res) => {
    // let salida = {
    //     nombre:'Argenis',
    //     edad: 24,
    //     url : req.url
    // }

    // res.send(salida);
    res.render('home', {
        nombre: 'ArgeNis'
    });
});

app.get('/about',  (req, res) => {
      res.render('about');
});
 
app.listen(ports, ()=> console.log(`Escuchando peticiones en el puerto ${ports}`));