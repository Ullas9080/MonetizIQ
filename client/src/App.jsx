
import { useLocation } from "react-router-dom"
import Header from "./components/Header"
import Router from "./routes/routes"

const App = () => {

const location=useLocation()
 const hideHeader = location.pathname === "/"; 

  return (
    <div>
{!hideHeader && <Header/>}
<Router/>

    </div>
  )
}

export default App
