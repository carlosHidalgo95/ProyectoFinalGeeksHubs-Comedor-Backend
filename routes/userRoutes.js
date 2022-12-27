const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

const db = require('../db/db');
const { authBearerMiddleware, isValidRoleAdmin } = require('../middleware/auth.middleware');

router.get('/get',authBearerMiddleware, userController.getUser);
router.delete('/delete',authBearerMiddleware,isValidRoleAdmin,userController.deleteUser);
router.put('/update',authBearerMiddleware,userController.updateUser);

module.exports = router;