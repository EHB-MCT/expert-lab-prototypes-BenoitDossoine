import {useState,useEffect} from 'react';

import ModelList from "./ModelList";
import ModelPreview from './ModelPreview';
import axios from 'axios';

function ModelPreviewContainer(){
    const [files,setFiles] = useState([]);
    useEffect(()=>{
        const files = axios.get('http://localhost:8000/files')
            .then(data => setFiles(data.data));
    },[])
    return(
        <div className="modelPreviewContainer">
            <ModelPreview/>
            <ModelList files={files}/>
        </div>
    )
}

export default ModelPreviewContainer;