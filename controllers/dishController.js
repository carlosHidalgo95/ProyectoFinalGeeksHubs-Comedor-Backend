const models = require('../models/index');
const { Op } = require("sequelize");
const {findDish,deleteDish,updateDish}=require("../services/dish.services")

const dishController = {}

//CREAR PLATO
dishController.createDish = async (req, res) => {
    try {
        const data=req.body;
        let resp=await createDish(data.name);
        res.send(resp);
    } catch (error) {
        res.send()
    }

}

//RECUPERAR PLATO

dishController.getDishByName = async (req, res) => {
    try {
        const data=req.body;
        let resp=await findDish(data.name);
        res.send(resp);
    } catch (error) {
        res.send()
    }

}

//MODIFICAR PLATO

dishController.deleteDish=async(req,res)=>{
    try{
        const data=req.body;
        let resp=await deleteDish(data.name);
        res.json({ message: "Se ha elminado el plato correctamente" })
    }catch{
        res.json({ message: "Ha ocurrido un error" })

    }
}

//ACTUALIZAR USUARIO

dishController.updateDish = async (req, res) => {
    // let user = req.body
    // let searchUser =await findUser(req.auth.email);
    
    // let newPassword = searchUser.password;
    // let newEmail=searchUser.email;
    // let newUsername=searchUser.username;
    // if (user.password) {
    //     newPassword = encryptPassword(user.password)
    // }

    // if (user.email){
    //     newEmail=user.email;
    // }

    // if (user.username){
    //     newUsername=user.username;
    // }

    // let resp =await updateUser(req.auth.email,newEmail,newPassword,newUsername);
    // res.json({
    //     resp, message: "El usuario se ha modificado correctamente"
    // })
};

module.exports = dishController;