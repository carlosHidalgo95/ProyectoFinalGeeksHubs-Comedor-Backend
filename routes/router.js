const express = require('express')
const router = express.Router()

const UserRoutes = require('./userRoutes')
const AuthRoutes= require('./authRoutes')
const DishesRoutes=require('./dishesRoutes')
//middleware para las rutas

router.use('/users', UserRoutes)
router.use('/auth',AuthRoutes)
router.use('/dishes',DishesRoutes)

module.exports = router