const cron = require('node-cron');
const express = require('express');
const sql = require('mysql2');
const sequelize = require('./util/database');
const Customer = require('./models/customer');
const Order = require('./models/order');
const { models } = require('mongoose');
const router = express.Router();
const app = express();
app.use(express.json());


//fiddle


// var arr=[0,0,1,0,0,2,2,1,0];

// var map=new Map();
// map.set("0",0);
// map.set("1",0);
// map.set("2",0);


// let num=0;
// let length=arr.length;
 


// for(let i=0;i<length;i++){
// map.set(`${arr[i]}`,map.get(`${arr[i]}`)+1);
// }

// for(let i=0;i<length;i++){
//     let quantity=map.get(`${num}`);
   
//     if(quantity>0){
//         console.log(quantity);
//         map.set(`${num}`,--quantity);
//         arr[i]=num;
//     }else{
//         num++;
//         i--;
//     }
// }

// console.log(arr);


let arr=[3,5,7,9,5];
let map=new Map();
let n=arr.length;
let start=0;
let end=0;


for(let i=0;i<n;i++){
    for(let j=i;j<n;j++){
        let str=[];
        for(let k=i;k<=j;k++){
            str.push(arr[k]);
        }
        let l=str.length;
        let stored=map.get(`${l}`);
        if(stored==undefined){
            map.set(`${l}`,str)
        }
    }
}


// for(let i=(n-1);i>=0;i--){
//     for(let j=i;j<n;j++){
//         let str="";
//         for(let k=i;k<n;k++){
//             str+=arr[k]+" ";
//         }
//        console.log(str);
//     }
// }










//fiddle


// app.get('/', (req, res) => {
//     res.send("ok");
// })
// app.post('/add', (req, res) => {
//     let change = (req.body);
//     sequelize.sync();
//     Customer.create({ name: req.body.name, email: req.body.email ,addresh:req.body.addresh})
//         .then(data => { res.send(data); })
//         .catch((err) => { console.log(err) });
// })

// app.put('/update', (req, res) => {
//     Customer.update({"name":req.body.name},{where:{id:req.query.id}})
//         .then(data => { res.send(data); })
//         .catch((err) => { console.log(err) });
// })

// app.delete('/delete', (req, res) => {
//     let change = (req.body.id);
//     Customer.destroy({ where: {id:change} })
//         .then(data => { res.sendStatus(400); })
//         .catch((err) => { console.log(err) });
// })
//cron with mysql
// const {createPool}=require('mysql');

// const pool=sql.createPool({
//     host:'localhost',
//     user:'root',
//     password:'pass',
//     database:"learn",
// })





// let num=0;
// cron.schedule('* * * * *', function() {
//     num++;
//     console.log(num);
//     pool.execute(`update student set time=${num} where name='deeya'`,(err,result)=>{
//         if(err){
//             return console.log(err);
//         }
//         return console.log(result);
//     })
//   });


//sequalize

// Customer.hasMany(Order);

// let customerId=null;
// sequelize
//     .sync({ force: true })
//     .then((result) => {
//         return Customer.create({name:"vikas",email:"vikas@ewar.in"})
//     }).then(customer=>{
//         customerId=customer.id;
//         console.log("Customer created",customer);
//         return customer.createOrder({total:45});
//     }).then(order=>{
//         console.log("order created",order);
//         return Order.findAll({where:customerId});
//     }).then(orders=>{
//         console.log("All the orders are:",orders)
//     })
//     .catch((err) => { console.log(err) });

app.listen(3000, () => {
    console.log("app is listening at 3000 ");
});