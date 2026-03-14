exports.getPizzas = (req,res)=>{

const pizzas = [

{
name:"Margherita",
price:199,
image:"https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
},

{
name:"Farmhouse",
price:299,
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591"
},

{
name:"Veggie Delight",
price:249,
image:"https://images.unsplash.com/photo-1548365328-9f547fb0953c"
},

{
name:"Pepperoni",
price:349,
image:"https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
}

]

res.json(pizzas)

}
