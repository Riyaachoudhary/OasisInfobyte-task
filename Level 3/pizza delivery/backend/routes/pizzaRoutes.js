const express = require("express")
const router = express.Router()

router.get("/options",(req,res)=>{

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

module.exports = router
