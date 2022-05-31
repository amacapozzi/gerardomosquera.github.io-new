const express = require('express');
const { status, append } = require('express/lib/response');
const res = require('express/lib/response');
const {vistaPrincipal} = require('../controllers/PageControllers');
const {appMantenimiento} = require('../controllers/PageControllers');
const router = express.Router();

router.get('/', vistaPrincipal);
module.exports = { routes: router }



router.get('/mantenimiento', (req,res)=>{
    res.render('mantenimiento')
});

router.get('/somos', (req,res)=>{
    res.render('nosotros')
});

router.get('/appmantenimiento', (req,res)=>{
    res.render('appman')
});



