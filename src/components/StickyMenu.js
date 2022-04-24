import { ChatBubbleOutline, FilePresent, Group, Language, ShoppingCartOutlined, VideoCall } from "@mui/icons-material"
import "../styles/stickymenu.css"

export default function StickyMenu() {
    return <nav className="sticky-menu">
        <div><ChatBubbleOutline /></div>
        <div><Language /></div>
        <div><FilePresent/></div>
        <div><VideoCall /></div>
        <div><Group /></div>
        <div><ShoppingCartOutlined /></div>
    </nav>
}