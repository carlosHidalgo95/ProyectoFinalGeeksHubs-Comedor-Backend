const models = require('../models/index');
const { Op } = require("sequelize");
const {findAllBookings,createBooking,findBooking,deleteBooking}=require("../services/booking.services")

const bookingController = {}

//CREAR RESERVA
bookingController.createBooking = async (req, res) => {
    try {
        // const data=req.body;
        console.log("empesemos")
        let resp=await createBooking();
        res.send(resp);
    } catch (error) {
        res.send()
    }

}

//RECUPERAR TODAS LAS RESERVAS
bookingController.getAllBookings = async (req, res) => {
    try {
        let resp=await findAllBookings();
        res.send(resp);
    } catch (error) {
        console.log(error)
        res.send()
    }

}

//RECUPERAR UNA RESERVA

bookingController.getBookingById = async (req, res) => {
    try {
        const data=req.body;
        let resp=await findBooking(data.id);
        res.send(resp);
    } catch (error) {
        res.send()
    }

}

//MODIFICAR PLATO

bookingController.deleteBooking=async(req,res)=>{
    try{
        const data=req.body;
        let resp=await deleteBooking(data.name);
        res.json({ message: "Se ha elminado la reserva correctamente" })
    }catch{
        res.json({ message: "Ha ocurrido un error" })

    }
}

module.exports = bookingController;