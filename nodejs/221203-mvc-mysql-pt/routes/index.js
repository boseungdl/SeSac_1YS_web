const express = require('express');
const controller = require('../controller/Cvisitor')
const router = express.Router();

router.get('/login', controller.login);
router.get('/signup', controller.signup);
router.get('/', controller.index);

module.exports = router;