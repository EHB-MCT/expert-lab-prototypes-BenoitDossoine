function ModelList(props:any){
    return(
        <>
            {props.files.map((element:any)=>{
                return <p key={element}>{element}</p>
            })}
        </>
    )
}

export default ModelList