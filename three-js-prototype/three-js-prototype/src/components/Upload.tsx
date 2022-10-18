import {useState} from 'react';
import axios from 'axios';

function Upload(){
    const [file,setFile] = useState('')
    const onChangeHandler = (event:any) =>{
        setFile(event.target.files[0]);
    }

    const onClickHandler = ()=>{
        const data = new FormData();
        data.append('file',file);
    
        axios.post('http://localhost:8000/upload',data,{

        })
        .then(response =>{
            console.log(response.statusText);
        })
    }

    return(
        <form>
            <input type="file" name="file" id="fileUpload"
            onChange={onChangeHandler} />
            <button type="button" onClick={onClickHandler}>Upload model</button>
        </form>
    )
}

export default Upload;