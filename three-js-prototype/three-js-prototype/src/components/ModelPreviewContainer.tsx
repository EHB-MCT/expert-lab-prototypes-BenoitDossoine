import {useState,useEffect} from 'react';

import ModelList from "./ModelList";
import ModelPreview from './ModelPreview';
import Upload from './Upload';
import axios from 'axios';
import {Suspense} from 'react';


function ModelPreviewContainer(){
    const [files,setFiles] = useState([]);
    const [model,setModel] = useState('fishie.glb');
    useEffect(()=>{
        const files = axios.get('http://localhost:8000/files')
            .then(data => setFiles(data.data));
    },[])

    const changeFile = (file:string)=>{setModel(file)};

    return(
        <div className="modelPreviewContainer">
            <Suspense>
                <ModelPreview model={model}/>
            </Suspense>
            <div>
                <ModelList files={files} onClick={changeFile}/>
                <Upload></Upload>
            </div>
        </div>
    )
}

export default ModelPreviewContainer;