const express = require('express');
const router = express.Router();

// Definir la ruta '/'
router.get('/', (req, res) => {
    res.render('index', { title: 'PatsyDC' });
});

router.get('/sobreMi', (req, res) => {
    res.render('sobreMi.html', { title: 'PatsyDC' });
});

router.get('/habilidades', (req, res) => {
    res.render('habilidades', { title: 'PatsyDC' });
});

router.get('/servicios', (req, res) => {
    res.render('servicios', { title: 'PatsyDC' });
});

router.get('/contactenos', (req, res) => {
    res.render('contactenos', { title: 'PatsyDC' });
});

router.get('/mensaje', (req, res) => {
    res.render('mensaje.html', { title: 'PatsyDC' });
});



module.exports = router;