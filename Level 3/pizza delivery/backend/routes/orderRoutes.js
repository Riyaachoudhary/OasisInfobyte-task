const express = require("express")
const router = express.Router()
const Order = require("../models/Order")

router.get("/pizza/options",(req,res)=>{

res.json({

bases:[
"Thin Crust",
"Thick Crust",
"Cheese Burst",
"Pan Base",
"Whole Wheat"
],

sauces:[
"Tomato",
"BBQ",
"Garlic",
"Pesto",
"Alfredo"
],

cheese:[
"Mozzarella",
"Cheddar",
"Parmesan"
],

veggies:[
"Onion",
"Capsicum",
"Corn",
"Mushroom",
"Olives"
]

})

})

router.post("/create",async(req,res)=>{

const order = new Order(req.body)

await order.save()

res.json({msg:"Order Placed"})

})

module.exports = router
