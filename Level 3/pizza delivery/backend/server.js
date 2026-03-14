const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const authRoutes = require("./routes/authRoutes")
const orderRoutes = require("./routes/orderRoutes")
const pizzaRoutes = require("./routes/pizzaRoutes")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))

app.use("/api/auth",authRoutes)
app.use("/api/orders",orderRoutes)
app.use("/api/pizza",pizzaRoutes)

app.listen(5000,()=>{
console.log("Server running on port 5000")
})
