import { Outlet } from "react-router-dom";
import Nav from "../Component/Navbar/Nav";
import Footer from "../Component/Footer/Footer";


const Layout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Layout;