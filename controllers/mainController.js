const path = require('path');

const controlador = {
    index:(req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'))
    },

    login:(req, res) => {
        res.sendFile(path.join(__dirname, '../views/login.html'))
    },

    register:(req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'))
    }

}

module.exports = controlador;