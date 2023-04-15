const { Router } = require('express');
const router = Router();
const characters = require("./character");
const favorites = require("./favorite");
const login = require("../controllers/Log");


router.use("/character", characters);
router.use("/favorite", favorites);
router.use("/login", login);

module.exports = router;