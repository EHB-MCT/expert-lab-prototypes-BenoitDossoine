import {ReactComponent as Gear} from '../assets/gear.svg';
import profile from '../assets/profile.jpg';
import background from '../assets/background.jpg'
import spotlight from '../assets/spotlight.gif'
function Intro(){
    return(
        <div className="tile" id="introTile">
            <div>
                <div id="introTitleContainer">
                    <p className='subtitle'>WELCOME!</p>
                </div>
                <div className="introImgContainer">
                    <img src={spotlight}
                    alt="Profile picture"
                    className='introImg'/>
                </div>
            </div>
            <div className="introTextContainer">
                <p className="introText">
                    Hi!
                    My name is Benoît and I'm a 25 years old developer, creator and engineer.
                    I am a fan of cool, immersive and interactive websites, so I set out creating them!
                </p>
                <p className="introText">
                    Want to see more? Keep scrolling!
                </p>
            </div>
        </div>
    )
}

export default Intro;