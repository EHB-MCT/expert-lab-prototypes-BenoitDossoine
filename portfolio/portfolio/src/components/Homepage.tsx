import Header from './Header';
import Title from './Title';
import Intro from './Intro';

function Homepage(){
    
    return(
    <>
        <div className="homepageContainer pageContainer">
            <Title/>
            <Header/>
            <Intro/>
        </div>
    </>
    )
}

export default Homepage;