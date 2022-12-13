function ProjectList(props:any){
    
    console.log(props.projects);
    return(
        <div className="projectList">
            {props.projects
            .filter((project:any)=>!project.attributes.featured)
            .sort((a:any,b:any)=>a.attributes.order-b.attributes.order)
            .map(
                (project:any,index:any)=>{
                    return(
                        <div className="projectListItem" key={index}>
                            <img src="" alt="" />
                            <h2>{project.attributes.name}</h2>
                        </div>
                    )
                }
            )}
            
        </div>
    )
}

export default ProjectList;