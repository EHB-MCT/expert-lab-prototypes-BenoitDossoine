import Upload from "./Upload"
function ModelList(props:any){
    const handleClick=(event:any)=>{
        props.onClick(event?.target?.name);
    }
    return(
        <div className="listContainer"> 
            {props.files.map((element:any)=>{
                return <button key={element} name={element} onClick={handleClick}>{element.replace(/\.[^/.]+$/, "").substring(element.indexOf("-")+1)}</button>
            })}
        </div>
    )
}

export default ModelList