const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');


router.post('/signup', controller.user_signup);
router.post('/login', controller.user_login);

module.exports = router;