const models = require("../models/index");

//Recuperar un usuario (a través de su email)
function findUser(email){
    let resp = models.users.findOne({
        where: {
            email
        }
    });
    return resp;
}

//Borrar usuario
function deleteUser(email){
    let resp= models.users.destroy({
        where: {
        email
        }
    });
    return resp;
}

function updateUser(email,newEmail,newPassword,newUsername){
    let resp=models.users.update(
        {
            email:newEmail,
            password:newPassword,
            username:newUsername
        },
        {
            where: { email }
        });
        return resp;
}

module.exports={findUser,deleteUser,updateUser};