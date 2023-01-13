const models = require("../models/index");

//Recuperar un usuario (a través de su email)
function findUser(email){
    let user = models.users.findOne({
        where: {
            email
        }
    });
    return user;
}

//Borrar usuario
function deleteUser(email){
    let user= models.users.destroy({
        where: {
        email
        }
    });
    return user;
}

function updateUser(email,newEmail,newPassword,newUsername){
    let user=models.users.update(
        {
            email:newEmail,
            password:newPassword,
            username:newUsername
        },
        {
            where: { email }
        });
        return user;
}

module.exports={findUser,deleteUser,updateUser};