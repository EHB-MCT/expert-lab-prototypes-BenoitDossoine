import HomepageButton from "./HomepageButton"

function Homepage(){
    return(
        <div id="homepageContainer">
            <p className="introText">Welcome!</p>
            <p className="introText">Choose your player status:</p>
            <div className="homepageBtnContainer">
                <HomepageButton content='player'/>
                <HomepageButton content='quiz master'/>
            </div>
        </div>
    )
}

export default Homepage