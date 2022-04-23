import "../styles/wavefooter.css"
import {ReactComponent as Waves} from '../assets/Waves.svg'

export default function WaveFooter() {
    return <div className="wave-container">
            <Waves className="wave"/>
        </div>
}