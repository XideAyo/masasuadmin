var express = require('express');
var router = express.Router();
const store = require('../utils/multer')

const indexController = require('../controller/indexController')

/* GET home page. */
router.get('/', indexController.getAdminPage)
router.post('/uploadimage',store.single('image'),indexController.postCars)
router.get('/allcars', indexController.getAllCars)
router.get('/cars/:id/delete?', indexController.deleteCar)
router.get('/cars/:id', indexController.getEditPage)
router.post('/cars/:id',store.single('image'),indexController.editCar)
module.exports = router;
