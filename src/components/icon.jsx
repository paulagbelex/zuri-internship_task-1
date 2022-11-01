import share from "../img/share-06.png"

function Icon() {
    return (
        <div className="share-wrapper">
            
            <button className="share-icon">
                <img src={share} alt="share icon" className="share" />
                <span className="tooltipText">share icon</span>
            </button>
        </div>
    )
       
}

export default Icon;