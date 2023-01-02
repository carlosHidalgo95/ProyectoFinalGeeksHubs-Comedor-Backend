const express = require('express')
const router = express.Router()

const UserRoutes = require('./userRoutes')
const AuthRoutes= require('./authRoutes')
const DishesRoutes=require('./dishesRoutes')
const BookingRoutes=require('./bookingRoutes')
//middleware para las rutas

router.use('/users', UserRoutes)
router.use('/auth',AuthRoutes)
router.use('/dishes',DishesRoutes)
router.use('/bookings',BookingRoutes)


module.exports = router