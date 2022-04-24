import { ExpandMore } from "@mui/icons-material"
import "../styles/navbutton.css"

export default function NavButton(props) {
    return <div className="action">
        <button onClick={ () => props.onClick()}>{props.text}</button>
        <ExpandMore className="chevron"/>
    </div>
}