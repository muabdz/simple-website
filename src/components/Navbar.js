import NavButton from "./NavButton";
import "../styles/navbar.css"

export default function Navbar() {

    return <nav className="navigation">
        <NavButton text="Demos" />
        <NavButton text="Pages" />
        <NavButton text="Portfolio" />
    </nav>
}