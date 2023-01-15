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

function createDish(body){
    let day=new Date().getDate();
    if (day<10) {
      day=`0${new Date().getDate()}`;
    }
   let month=new Date().getMonth()+1;
    if (month<10) {
      month=`0${month}`;
    }
    let dish = models.dishes.create({
        dish_name:body.name,
        id_type:body.id_type,
        img:body.img,
        createdAt: `${new Date().getFullYear()}-${month}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        updatedAt: `${new Date().getFullYear()}-${month}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
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