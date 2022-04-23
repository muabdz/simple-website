import NavButton from "./NavButton";
import "../styles/navbar.css"
import { ShoppingCart } from "@mui/icons-material";
import { Search } from "@mui/icons-material";

export default function Navbar() {

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
    </nav>
}