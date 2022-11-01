import share from "../img/share-06.png"

function Icon() {
    return (
        <div className="share-wrapper">
            
            <button className="share-icon">
                <p className="share-display" > share link</p>
                <img src={share} alt="share icon" className="share"/>
            </button>
        </div>
    )
       
}

export default Icon;