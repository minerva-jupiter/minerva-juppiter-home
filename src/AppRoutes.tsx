import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
import Home from './Home';
import Navbars from "./Navbar";
import Schedule from "./Schedule";
import Works from "./Works";
import Blog from "./Blog";
import Footer from "./Footer";
import "./style.css";
  
  const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbars />
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Schedule' element={<Schedule/>} />
            <Route path="/Works" element={<Works />} />
            <Route path="/Blog" element={<Blog />} />
            </Routes>
            <footer>
              <Footer />
            </footer>
        </BrowserRouter>
    )
  };
  
  export default AppRoutes;