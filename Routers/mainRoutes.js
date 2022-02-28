const express = require('express');
const path = require('path');
const controlador = require('../controllers/mainController');

const router = express.Router();

router.get('/', controlador.index);
router.get('/login', controlador.login);
router.get('/register', controlador.register);

module.exports = router;
