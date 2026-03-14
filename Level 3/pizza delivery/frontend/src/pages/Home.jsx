import {useEffect,useState} from "react"
import axios from "axios"
import PizzaCard from "../components/PizzaCard"

export default function Home(){

const[pizzas,setPizzas]=useState([])

useEffect(()=>{

axios.get("http://localhost:5000/api/pizzas")
.then(res=>setPizzas(res.data))

},[])

return(

<div style={{padding:"20px"}}>

<h1>Available Pizzas</h1>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"20px"
}}>

{pizzas.map((pizza,i)=>(

<PizzaCard key={i} pizza={pizza}/>

))}

</div>

</div>

)

}
