import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
  import Home from './Home';
  import Navbars from "./Navbar";
  
  const AppRoutes = () => {
    return (
        <div style={{backgroundColor:"black"}}>
            <BrowserRouter>
                <Navbars/>
                <Routes>
                <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
  }
  
  export default AppRoutes;