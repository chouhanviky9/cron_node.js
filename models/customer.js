const Sequelize=require('sequelize');
const sequelize=require('../util/database');


const Customer=sequelize.define("customer",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true,
        defaultValue : Sequelize.UUIDV4

    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    addresh:{
        type:Sequelize.JSON,
        allowNull:true
    }
})

module.exports=Customer;