import slackImg from "../img/slack.png"
import gitHubImg from "../img/Icon.png"


function SocialIcon() {
    return (
        <div className="socio-link">
            <a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U/rimeto_profile/U048AKBAHH9" >
                <img src={slackImg} alt="slack logo link" />
            </a>
            
            <a href="https://github.com/paulagbelex" >
                <img src={gitHubImg} alt="github logo link" />
            </a>
        </div>
    )
    
}

export default SocialIcon;