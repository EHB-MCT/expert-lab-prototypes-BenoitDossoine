import {useEffect,useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Project from "../interfaces/ProjectInterface";
import { projectService } from "../services/ProjectService";
import { FaGithub, FaGlobeAmericas, FaArrowLeft } from "react-icons/fa";


function DetailPage(props:any){
    const navigate = useNavigate();
    const parameters = useParams();
    let [project,setProject] = useState<Project | null>(null);
    let [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        if(parameters.id){
            projectService.fetchProjectById(parseInt(parameters.id))
            .then(response=>{
                setProject(response);
                setLoading(false);
                console.log(response);
            })
        }
    },[parameters.id])

    const backToHome = ()=>{
        navigate(-1);
    }

    return(
        <div className="detailPage">
            {loading?
            <p>Loading</p> :
            <>
                <FaArrowLeft className="backArrow" onClick={()=>backToHome()}/>
                <div className="detailTextContainer detailDiv">
                    <h1>{project?.attributes?.name}</h1>
                    <p className="detailText">{project?.attributes.description}</p>

                    <div className="detailLinksContainer">
                        {project?.attributes.link&&
                            <p className="detailLink">
                            <FaGlobeAmericas/>
                            <a href={project?.attributes.link}>View this project</a>
                        </p>
                        }
                        {project?.attributes.repository&&
                            <p className="detailLink">
                                <FaGithub/>
                                <a href={project?.attributes.repository}>Check out the code</a>
                            </p>
                        }
                    </div>
                </div>
                <div className="detailMediaContainer detailDiv">
                    <img src={`http://localhost:1337${project?.attributes.thumbnail.data.attributes.url}`} alt="" />
                </div>
            </>}
        </div>

    )
}

export default DetailPage;