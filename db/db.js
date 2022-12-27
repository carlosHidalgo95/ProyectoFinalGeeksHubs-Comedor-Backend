const config=require('../config/config.json');
const { Sequelize }=require('sequelize');

const sequelize=new Sequelize(
    config.production.database,
    config.production.username,
    config.production.password,
    {
        host:config.production.host,
        port:config.production.port,
        dialect:config.production.dialect
    }
)
module.exports=sequelize;