import {Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import Contact from "./pages/Contact"
function App () {
  return <Routes>
   <Route path="/" element={<Home />}  ></Route>
   <Route path="/Contact" element={<Contact />}  ></Route>

  </Routes>
}
export default App