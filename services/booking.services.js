const models = require("../models/index");

function findBooking(id){
    let resp = models.bookings.findOne({
        where: {
            id
        }
    });
    return resp;
}

function findAllBookings(){
    let resp = models.bookings.findAll();
    return resp;
}

async function createBooking(){
    let day,month;
    day=new Date().getDate();
    if (day<10) {
      day=`0${new Date().getDate()}`;
    }
    month=new Date().getMonth()+1;
    if (month<10) {
      month=`0${month}`;
    }
    console.log(`${new Date().getFullYear()}-${month}-${day}`)
    let resp =await models.bookings.create({
        booking_date:`${new Date().getFullYear()}-${month}-${day}`,
        time:"12:30",
        // id_user: req.auth.id,
        id_user: 1,
        createdAt: `${new Date().getFullYear()}-${month}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        updatedAt: `${new Date().getFullYear()}-${month}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    });
    let dish1=await models.dishes.findOne({
        where: {
            id:1
        }
    })
    let dish2=await models.dishes.findOne({
        where: {
            id:2
        }
    })
    resp.addDishes([dish1,dish2])
    console.log("WTF    "+resp);
    return resp
}

function deleteBooking(id){
    let resp= models.bookings.destroy({
        where: {
        id
        }
    });
    return resp;
}
function findBookingsByDate(date){
    let resp = models.bookings.findAll({
        where: {
            booking_date:date
        }
    });
    return resp;
}

module.exports={findBooking,createBooking,findAllBookings,deleteBooking,findBookingsByDate};