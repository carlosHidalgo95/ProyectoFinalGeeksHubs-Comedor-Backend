const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dishController');

const db = require('../db/db');
const { authBearerMiddleware, isValidRoleAdmin } = require('../middleware/auth.middleware');


router.get('/get', dishController.getDishByName);
router.get('/getAll', dishController.getAllDishes);
router.post(authBearerMiddleware,isValidRoleAdmin, '/create', dishController.createDish);
router.delete('/delete',dishController.deleteDish);
router.put('/update',dishController.updateDish);

module.exports = router;