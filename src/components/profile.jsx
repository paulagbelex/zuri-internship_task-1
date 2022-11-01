import React from "react";
import Propic from "../img/my-profile-pic.png";
import Overlay from "../img/cam.png"


function Profile() {
    return (
        <div>
            <img id="profile__img" src={Propic} alt="my picture" />
            <div className="profile_div">            
                <img className="overlay_img" src={Overlay} alt="overlay cam picture" />
            </div>
            
            <p id="twitter">Paulagbelex</p>
            <p id="slack">Paulagbelex</p>
        </div>
       
    )
}

export default Profile;