const models = require('../models/index');
const { Op } = require("sequelize");
const {getAllBookings,findBooking,findBookingByUser,findBookingsByDate,findAllBookings,createBooking,deleteBooking}=require("../services/booking.services")

const bookingController = {}

//CREAR RESERVA
bookingController.createBooking = async (req, res) => {
    try {
        let resp=await createBooking(req.body,req.auth.id);
        res.json(resp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

bookingController.searchBookings = async (req, res) => {
    try{
        let resp = await findBooking(req.params.word,req.auth.id);
        res.json(resp);
    }catch(error){
        console.log(error)
        res.status(500).json({ message: error.message });
    }

}

bookingController.searchAllBookings = async (req, res) => {
    try{
        let resp = await findAllBookings(req.params.word);
        res.json(resp);
    }catch(error){
        console.log(error)
        res.status(500).json({ message: error.message });
    }

}

//RECUPERAR TODAS LAS RESERVAS
bookingController.getAllBookings = async (req, res) => {
    try {
        let resp=await getAllBookings();
        res.json(resp);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }

}

//RECUPERAR UNA RESERVA

bookingController.getBookingsByUser = async (req, res) => {
    try {
        // console.log(req.auth);
        let resp=await findBookingByUser(req.auth.id);
        res.send(resp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

bookingController.getBookingByDate = async (req, res) => {
    try{
        let resp=await findBookingByDate(req);
        res.send(resp);
    } catch(error){
        res.status(500).json({ message: error.message });
    }

}

//MODIFICAR PLATO

bookingController.deleteBooking=async(req,res)=>{
    try{
        const data=req.body;
        let resp=await deleteBooking(data.name);
        res.json({ message: "Se ha elminado la reserva correctamente" })
    }catch(error){
        res.json({ message: "Ha ocurrido un error" })
    }
}

bookingController.getFreeTimes = async (req, res) => {
    const data=req.body;
    let times=["14:00","14:15","14:30","14:45","15:00","15:15","15:30"];
    let aviableTimes=new Array();
    let aviable=false;
    let resp=await findBookingsByDate(data.date);
    console.log("LENGTH:"+resp.length);
    if (resp.length==0) {
        aviableTimes=times;
    }
    else{
        for (let i=0; i<times.length; i++){
            for (let j = 0; j < resp.length; j++) {
                if (times[i]==resp[j].dataValues.time) {
                    aviable=false;
                }else{
                    aviable=true;
                }
            }
            if(aviable){
                aviableTimes.push(times[i]);
            }
    
        }
    }
    
    res.send(aviableTimes);
}

module.exports = bookingController;