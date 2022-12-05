
function LoadingPage(props:any){
    return(
        <div className="loadingPage">
                <p className="loadingPageText">This experience is beter with sound!</p>
                {props.loading?
                    <p className="loadingPageText">Loading....</p>
                :
                    <button 
                        className="loadingPageBtn"
                        onClick={()=>{
                            props.clickHandler();
                        }}>
                            Enter
                    </button>
                }
            </div>
    )
}

export default LoadingPage;