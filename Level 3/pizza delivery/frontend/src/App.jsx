import { BrowserRouter, Routes, Route } from "react-router-dom"

import Auth from "./pages/Auth"
import Dashboard from "./pages/Dashboard"
import Builder from "./pages/Builder"

function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Dashboard />} />

<Route path="/login" element={<Auth />} />

<Route path="/builder" element={<Builder />} />

</Routes>

</BrowserRouter>

)

}

export default App
