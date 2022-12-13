import {useEffect,useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Project from "../interfaces/ProjectInterface";
import { projectService } from "../services/ProjectService";
import {globalService} from '../services/GlobalService';    
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
            })
        }
    },[parameters.id])

    const backToHome = ()=>{
        globalService.audioStatus = true;
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
                                <a href={project?.attributes.repository} target="_blank" rel="noopener noreferrer">Check out the code</a>
                            </p>
                        }
                    </div>
                </div>
                <div className="detailMediaContainer detailDiv">
                    <img src={`${project?.attributes.thumbnail.data.attributes.url}`} alt="" />
                </div>
            </>}
        </div>

    )
}

export default DetailPage;