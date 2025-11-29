import Summary from "../pages/Summary";

import Login from "../components/Login";
import About from "../pages/About";
import DashBoard from "../pages/DashBoard";
import Home from "../pages/Home";
import {Routes,Route} from "react-router-dom"


const Router=() =>{

return(
    <Routes >
<Route path="/" element={<Login/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/dashboard" element={<DashBoard/>}/>
<Route path="/summary" element={<Summary/>}/>
<Route path="/about" element={<About/>}/>
</Routes>
)


}

export default Router;