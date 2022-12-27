const models = require("../models/index");

function findUser(email){
    let resp = models.user.findOne({
        where: {
            email
        }
    });
    return resp;
}

function deleteUser(email){
    let resp= models.user.destroy({
        where: {
        email
        }
    });
    return resp;
}

function updateUser(email,newEmail,newPassword,newUsername){
    let resp=models.user.update(
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