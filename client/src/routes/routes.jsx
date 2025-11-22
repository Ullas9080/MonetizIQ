import Login from "../components/Login";
import About from "../pages/About";
import DasnBoard from "../pages/DasnBoard";
import Home from "../pages/Home";
import {Routes,Route} from "react-router-dom"

const Router=() =>{

return(
    <Routes>
        <Route path="/" element={<Login/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/dashboard" element={<DasnBoard/>}/>
<Route path="/about" element={<About/>}/>
</Routes>
)


}

export default Router;