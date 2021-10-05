const Customer=require('../models/customer');

var CustomerController={
    addCustomer: addCustomer,
}

let addCustomer=()=>{
    let obj=req.body;
    Customer.create(obj)
    .then(data=>{
        res.send(data);
    })
    .catch((error) => {
        console.log(error);
    });
}


module.exports=CustomerController;