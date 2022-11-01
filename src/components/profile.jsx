import React from "react";
import Propic from "../img/my-profile-pic.png";
import overlay from "../img/cam.png"


function Profile() {
    return (
        <div>
            <div  className="profile_div">
                <img id="profile__img" src={Propic} alt="my picture" /><span className="cam"><img src={overlay}/></span>
            </div>
            <p id="twitter">Paulagbelex</p>
            <p id="slack">Paulagbelex</p>
        </div>
       
    )
}

export default Profile;
