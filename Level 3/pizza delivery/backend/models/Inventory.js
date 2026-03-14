const mongoose = require("mongoose")

const InventorySchema = new mongoose.Schema({

base:Number,
sauce:Number,
cheese:Number,
veggies:Number

})

module.exports = mongoose.model("Inventory",InventorySchema)
