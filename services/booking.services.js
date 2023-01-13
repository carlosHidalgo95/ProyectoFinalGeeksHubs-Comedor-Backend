const models = require("../models/index");
const Dishes=models.dishes;

//Recuperar las reservas de un usuario concreto
function findBooking(id_user){
    const booking = models.bookings.findAll({
        where: {
            id_user
        },
        include: Dishes
    });
    return booking;
}

//Recuperar todas las reservas
function findAllBookings(){
    const booking = models.bookings.findAll({include: Dishes});
    return booking;
}

//Crear reserva
async function createBooking(body,id){
   let day=new Date().getDate();
    if (day<10) {
      day=`0${new Date().getDate()}`;
    }
   let month=new Date().getMonth()+1;
    if (month<10) {
      month=`0${month}`;
    }
    console.log(body);
    const booking =await models.bookings.create({
        booking_date:body.booking_date,
        time:body.time,
        id_user: id,
        createdAt: `${new Date().getFullYear()}-${month}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        updatedAt: `${new Date().getFullYear()}-${month}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    });

    //Añadimos los platos de la reserva a la tabla intermedia
    const entrante=await models.dishes.findOne({
        where: {
            id:body.entrante_id
        }
    })
    const primero=await models.dishes.findOne({
        where: {
            id:body.primero_id
        }
    })
    const segundo=await models.dishes.findOne({
        where: {
            id:body.segundo_id
        }
    })
    booking.addDishes([entrante,primero,segundo])
    return booking
}

//Borrar reserva
function deleteBooking(id){
    const booking= models.bookings.destroy({
        where: {
        id
        }
    });
    return booking;
}

//Recuperar reserva por fecha
function findBookingsByDate(date){
    const booking = models.bookings.findAll({
        where: {
            booking_date:date
        }
    });
    return booking;
}

module.exports={findBooking,createBooking,findAllBookings,deleteBooking,findBookingsByDate};