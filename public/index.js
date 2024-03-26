//llamar al modulo express
const express = require('express');
const app =express(); //constante para llamar al servidor
const path = require('path');


//SEETINGS - varible 'port' y su valor es el 8001
app.set('port', 8001);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); //usar el html con las funcionalidades de ejs
app.set('view engine', 'ejs'); //motor de plantilla

//routes
const indexRouter = require('./routes/index'); // Importar el router de index.js
app.use('/', indexRouter); // Usar el router para la ruta '/'

//static
app.use(express.static(path.join(__dirname, 'assets')));

//server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

console.log('patsy');
//nodemos hace que cada cambio que se haga el servirdor se actualize automaticamente