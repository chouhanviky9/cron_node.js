const Sequelize=require('sequelize');

const sequelize=new Sequelize("learn","root","pass",{
    dialect:"mysql",
    host:"localhost",
    sync: {
        force: false
    },
    freezeTableName: true,
    
});

module.exports=sequelize;