var express = require('express');
var router = express.Router();

const indexController = require('../controller/indexcontroller')
/* GET home page. */
router.get('/', indexController.Home)
router.get('/about', indexController.About);
router.get('/contact', indexController.Contact)
router.post('/contact', indexController.SendMessage)
router.get('/request', indexController.Request)
router.get('/used' , indexController.UsedPage)
router.get('/new' , indexController.NewPage)
router.get('/car/:id' ,  indexController.SingleCar)

module.exports = router;