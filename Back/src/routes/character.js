const { Router } = require('express');
const router = Router();
const { getCharById } = require('../controllers/Char')

//router.get('/all',getAll)
router.get('/:id',getCharById)
router.get("/detail/:id",getCharById)


module.exports = router
















