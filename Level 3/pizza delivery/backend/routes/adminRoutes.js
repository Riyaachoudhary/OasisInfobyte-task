const express = require("express")

const Order = require("../models/Order")

const router = express.Router()

router.put("/status/:id",async(req,res)=>{

const order = await Order.findByIdAndUpdate(

req.params.id,

{status:req.body.status},

{new:true}

)

res.json(order)

})

module.exports = router
