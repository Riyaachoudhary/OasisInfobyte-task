const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({

userId:String,

pizza:{
base:String,
sauce:String,
cheese:String,
veggies:[String]
},

status:{
type:String,
default:"Order Received"
}

})

module.exports = mongoose.model("Order",OrderSchema)
