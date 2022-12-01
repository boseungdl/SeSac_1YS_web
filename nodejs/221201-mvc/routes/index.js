var express = require('express');
var controller =require('../controller/Cmain');
const router = express.Router();

router.get('/', controller.main); //get post등은 http메서드를 처리하기위해 router객체에 처리하는 함수를 등록하는 함수다.
router.get('test', controller.test);

router.post('/login', controller.login);
router.get('/login2', controller.login2);
router.post('postForm', controller.post);

module.exports = router;