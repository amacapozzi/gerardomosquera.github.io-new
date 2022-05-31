const express = require('express');
const { format } = require('path');
const app = express();
const path = require('path');
const puerto = '2500';
const urlentrada = 'http://localhost:';
const mostrarusuarios = require('./mongodb/mongodb');



app.listen(puerto, ()=>{
    console.log(`Servidor listo en ${urlentrada}${puerto}`);

});

app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));



app.use(express.urlencoded({extended: false}));
app.use(express.json());

const router = require('./routes/router');
app.use(router.routes);


app.use('*', function(req, res, next) {
    res.status(404).render('404');
    next();
  });





