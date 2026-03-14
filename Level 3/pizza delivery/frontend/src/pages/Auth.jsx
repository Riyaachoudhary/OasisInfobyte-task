import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/auth.css"

export default function Auth(){

const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const users = JSON.parse(localStorage.getItem("users") || "{}")

const signUp=(e)=>{
e.preventDefault()

if(!name || !email || !password){
alert("Please fill all fields")
return
}

if(users[email]){
alert("Email already registered")
return
}

users[email]={name,password}

localStorage.setItem("users",JSON.stringify(users))

alert("Registration successful! Please login")
}

const signIn=(e)=>{
e.preventDefault()

if(users[email] && users[email].password===password){

localStorage.setItem("loggedUser",email)

alert("Login successful")

navigate("/")

}else{

alert("Invalid email or password")

}
}

return(

<div className="auth-page">

<div className="container">

<input type="checkbox" id="toggle" className="toggle-checkbox"/>

<div className="form-container sign-up">

<form onSubmit={signUp}>

<h1>Create Account</h1>

<input type="text" placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input type="email" placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input type="password" placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">Sign Up</button>

</form>

</div>

<div className="form-container sign-in">

<form onSubmit={signIn}>

<h1>Sign In</h1>

<input type="email" placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input type="password" placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">Sign In</button>

</form>

</div>

<div className="toggle-container">

<div className="toggle">

<div className="toggle-panel toggle-left">

<h1>Welcome Back!</h1>

<p>Login to continue</p>

<label htmlFor="toggle">Sign In</label>

</div>

<div className="toggle-panel toggle-right">

<h1>Hello Friend!</h1>

<p>Register and start ordering pizza</p>

<label htmlFor="toggle">Sign Up</label>

</div>

</div>

</div>

</div>

</div>

)

}
