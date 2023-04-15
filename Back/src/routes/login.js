const { Router } = require('express');
const router = Router();
const { login } = require('../controllers/Log');

router.get('/', login);

module.exports = router