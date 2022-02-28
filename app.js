const express = require('express');
const path = require('path'); //unificar las rutas dentro de los dist SO.
const app = express();
const mainRoutes = require('./Routers/mainRoutes');
const publicPath = path.resolve(__dirname, './public');

app.use(mainRoutes);

app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo');
});

