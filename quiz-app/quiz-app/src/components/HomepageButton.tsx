function HomepageButton(props:any){
    const handleClick = (event:any)=>{
        props.onStateChange();
    }
    return(
        <button 
        className={props.state?'active' + " homepageBtn":'inactive' + " homepageBtn"}
        onClick={event => handleClick(event)}
        >{props.content}</button>
    )
}

export default HomepageButton