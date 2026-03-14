import {NavLink,useNavigate} from "react-router-dom"

export default function Navbar(){

const navigate = useNavigate()

const logout = ()=>{

localStorage.removeItem("loggedUser")

navigate("/")

}

return(

<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"15px 40px",
background:"#ff8c00",
color:"white"
}}>

<h2>Pizza Heavens 🍕</h2>

<div style={{display:"flex",gap:"20px"}}>

<NavLink to="/dashboard">Home</NavLink>

<NavLink to="/builder">Customize Pizza</NavLink>

<button onClick={logout}>Logout</button>

</div>

</div>

)

}
