export default function PizzaCard({pizza}){

return(

<div className="pizza-card">

<img src={pizza.image} alt={pizza.name}/>

<h3>{pizza.name}</h3>

<p>₹{pizza.price}</p>

<button>Customize</button>

</div>

)

}
