const models = require("../models/index");

function findDish(name){
    let dish = models.dishes.findOne({
        where: {
            dish_name:name
        }
    });
    return dish;
}

function findAllDishes(){
    let dishes = models.dishes.findAll();
    return dishes;
}

function createDish(){
    let dish = models.dishes.create({

    });
    return dish
}

function deleteDish(id){
    let deletedDish= models.dishes.destroy({
        where: {
        id
        }
    });
    return deletedDish;
}

function updateDish(){

}

module.exports={findDish,createDish,findAllDishes,deleteDish,updateDish};