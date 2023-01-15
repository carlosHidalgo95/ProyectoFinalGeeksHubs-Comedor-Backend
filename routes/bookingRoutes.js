const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

const db = require('../db/db');
const { authBearerMiddleware, isValidRoleAdmin } = require('../middleware/auth.middleware');

router.get('/get',authBearerMiddleware, bookingController.getBookingsByUser);
router.get('/getAll',authBearerMiddleware,isValidRoleAdmin, bookingController.getAllBookings);
router.post('/getTimes', bookingController.getFreeTimes);
router.post('/create',authBearerMiddleware, bookingController.createBooking);
router.delete('/delete',bookingController.deleteBooking);

module.exports = router;