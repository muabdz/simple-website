import { useState } from "react";
import NavButton from "./NavButton";
import "../styles/navbar.css"
import { ShoppingCart, Search, Menu} from "@mui/icons-material";

export default function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false);


    return <nav className="navigation">
        <div className="nav-buttons">
            <NavButton text="Demos" />
            <NavButton text="Pages" />
            <NavButton text="Portfolio" />
        </div>
        <div className="end-buttons">
            <button><ShoppingCart /></button>
            <button><Search /></button>
            <input type="text" /> 
        </div>
        <button 
            className="hamburger"
            onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }}
        >
            <Menu />
        </button>
        <div className={isNavExpanded ? "nav-menu-expanded" : "nav-menu"}>
            <NavButton text="Demos" />
            <NavButton text="Pages" />
            <NavButton text="Portfolio" />
        </div>
    </nav>
}