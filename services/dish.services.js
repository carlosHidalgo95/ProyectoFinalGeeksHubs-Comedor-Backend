const models = require("../models/index");

function findDish(name){
    let resp = models.dishes.findOne({
        where: {
            dish_name:name
        }
    });
    return resp;
}

function findAllDishes(){
    let resp = models.dishes.findAll();
    return resp;
}

function createDish(){
    let resp = models.dishes.create({

    });
    return resp
}

function deleteDish(id){
    let resp= models.dishes.destroy({
        where: {
        id
        }
    });
    return resp;
}

function updateDish(){
    // let resp=models.dish.update(
    //     {
    //         email:newEmail,
    //         password:newPassword,
    //         username:newUsername
    //     },
    //     {
    //         where: { email }
    //     });
    //     return resp;
}

module.exports={findDish,createDish,findAllDishes,deleteDish,updateDish};