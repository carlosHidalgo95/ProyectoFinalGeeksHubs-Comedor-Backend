const models = require("../models/index");
const Dishes=models.dishes;
function findBooking(id_user){
    const booking = models.bookings.findAll({
        where: {
            id_user
        },
        include: Dishes
    });
    return booking;
}

function findAllBookings(){
    const booking = models.bookings.findAll({include: Dishes});
    return booking;
}

async function createBooking(body,id){
    console.log("Socorro")
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
        // booking_date:`${new Date().getFullYear()}-${month}-${day}`,
        booking_date:body.booking_date,
        time:body.time,
        // id_user: req.auth.id,
        id_user: id,
        createdAt: `${new Date().getFullYear()}-${month}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        updatedAt: `${new Date().getFullYear()}-${month}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    });
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

function deleteBooking(id){
    const booking= models.bookings.destroy({
        where: {
        id
        }
    });
    return booking;
}
function findBookingsByDate(date){
    const booking = models.bookings.findAll({
        where: {
            booking_date:date
        }
    });
    return booking;
}

module.exports={findBooking,createBooking,findAllBookings,deleteBooking,findBookingsByDate};