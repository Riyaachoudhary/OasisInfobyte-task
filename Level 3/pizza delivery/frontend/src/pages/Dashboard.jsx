import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function Dashboard(){

const navigate = useNavigate()

const pizzas = [

{
name:"Margherita",
price:199,
image:"https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500"
},

{
name:"Farmhouse",
price:299,
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
},

{
name:"Veggie Delight",
price:249,
image:"https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=500"
},

{
name:"Pepperoni",
price:349,
image:"https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
}

]

const handleCustomize = ()=>{

const user = localStorage.getItem("loggedUser")

if(!user){

alert("Please login to customize pizza")

navigate("/login")

}else{

navigate("/builder")

}

}

return(

<div>

<Navbar/>

<div style={{padding:"40px"}}>

<h1 style={{textAlign:"center"}}>Pizza Heavens 🍕</h1>

<div style={{
display:"flex",
flexWrap:"wrap",
justifyContent:"center",
gap:"20px",
marginTop:"30px"
}}>

{pizzas.map((pizza,i)=>(

<div key={i} style={{
width:"220px",
borderRadius:"10px",
boxShadow:"0 4px 10px rgba(0,0,0,0.2)",
padding:"10px",
textAlign:"center"
}}>

<img
src={pizza.image}
style={{width:"100%",borderRadius:"10px"}}
/>

<h3>{pizza.name}</h3>

<p>₹{pizza.price}</p>

<button
style={{
background:"#ff5f1f",
color:"white",
border:"none",
padding:"8px",
borderRadius:"5px",
cursor:"pointer"
}}
onClick={handleCustomize}
>

Customize

</button>

</div>

))}

</div>

</div>

</div>

)

}
