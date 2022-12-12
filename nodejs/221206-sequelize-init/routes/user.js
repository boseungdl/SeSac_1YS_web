var express = require("express");
var controller = require("../controller/Cuser");
const router = express.Router();

router.get('/', (req, res) => {
  res.render('signup')
})
router.post('/signup', controller.user_register)
router.post('/login', controller.user_login)
router.patch('/update', controller.user_update)

module.exports = router;