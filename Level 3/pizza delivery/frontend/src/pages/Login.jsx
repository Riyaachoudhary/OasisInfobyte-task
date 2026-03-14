import {useState} from "react"
import {useNavigate,Link} from "react-router-dom"

export default function Login(){

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

const navigate = useNavigate()

const handleLogin=(e)=>{

e.preventDefault()

if(email && password){

alert("Login Successful")

navigate("/")

}

}

return(

<div style={{textAlign:"center",marginTop:"100px"}}>

<h2>Login</h2>

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button type="submit">Login</button>

</form>

<p>

Don't have account?

<Link to="/register"> Register</Link>

</p>

</div>

)

}
