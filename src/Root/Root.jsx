import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => false);

    return (
        <div data-theme={isDarkMode === true ? 'dark' : 'light'}>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;