import {useState,useEffect} from 'react';
import { triviaService } from '../services/TriviaService';

function Masterpage(props:any){
    let [categories,setCategories] = useState(null);
    let [loading,setLoading] = useState(true);
    let [settings,setSettings] = useState({
        "categories": '9',
        "numberOfQuestions":'1',
        "difficulty": 'easy'
    })

    useEffect(()=>{
        setLoading(true);
        triviaService.fetchCategories()
        .then(response=>{
            setCategories(response);
            setLoading(false);
        });
    },[]);
    
    const renderCategories = (categories:any)=>{
        return categories.map((category:any)=>{
            return <option value={category.id} key={category.id}>{category.name}</option>
        })
    }

    const handleSubmit = (event:any)=>{
        event.preventDefault();
        props.client.emit("questions_submitted",settings);
    }

    const handleChange = (event:any)=>{
        const target = event.target;
        const value = event.target.value;
        const name = target.name;
        
        setSettings({
            ...settings,
            [name]:value
        });
    }

    return(
        <div id="masterpageContainer">
            {loading?
            <p>Loading...</p>: 
            <form id="quizSettings" onSubmit={handleSubmit}>
                <label htmlFor="categories">Category</label>
                <select name="categories" id="quizCategories" onChange={handleChange}>
                    {renderCategories(categories)}
                </select>
                <label htmlFor="">Number of questions</label>
                <input name="numberOfQuestions" type="number" min="1" max="15" onChange={handleChange} placeholder='1'/>
                <label htmlFor="difficulty">Difficulty</label>
                <select name="difficulty" id="quizDifficulty" onChange={handleChange}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <input type="submit" value="Create quiz"/>
            </form>
            }
        </div>
    )
}

export default Masterpage