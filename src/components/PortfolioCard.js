import "../styles/portfoliocard.css"

export default function PorfolioCard(props) {
    return <div className="card">
        <div className="icon">{props.icon}</div>
        <h3 className="title">{props.text}</h3>
        <p className="description">{props.description}</p>
    </div>
}