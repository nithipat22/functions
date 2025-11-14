const express = require('express');
const router = express.Router();

const login = require('../controller/user/login');
const register = require('../controller/user/register');

router.post('/login', login);
router.post('/register', register);

module.exports = router;
