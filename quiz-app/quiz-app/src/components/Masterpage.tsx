import {useState,useEffect} from 'react';
import { triviaService } from '../services/TriviaService';
import Player from '../interfaces/Player';
import { useDispatch, useSelector } from "react-redux";
import { selectPlayerList } from '../Store/Players/Selectors';
import { StoreState } from "../Store/store.types";



function Masterpage(){
    let [categories,setCategories] = useState(null);
    let [loading,setLoading] = useState(true);
    let [settings,setSettings] = useState({})

    const playerList = useSelector<StoreState, Player[]>(
        selectPlayerList
      )
    
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
        console.log(settings)
    }

    const handleChange = (event:any)=>{
        const target = event.target;
        const value = event.target.value;
        const name = target.name;
        
        setSettings({
            [name]:value
        });

        setTimeout(()=>{
            console.log(settings)
        },1000         
        )
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
                <input name="numberOfQuestions" type="number" min="1" max="15" onChange={handleChange}/>
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