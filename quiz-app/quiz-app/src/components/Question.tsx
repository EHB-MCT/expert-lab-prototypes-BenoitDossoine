import {useEffect,useState} from 'react';
import {fromEvent} from 'rxjs'
import {pluck,tap} from 'rxjs/operators';
import Timer from './Timer';

function Question(props:any){
    const question = props.question;
    
    let allAnswers = [question["correct_answer"],...question["incorrect_answers"]];
    let shuffledAnswers = allAnswers.sort(()=>Math.random()-0.5);

    useEffect(()=>{
        let buttons = document.getElementsByClassName('answer');
        const source = fromEvent(buttons,'click');
        const values = source.pipe(
            pluck('target'),
            pluck('dataset'),
            pluck('answer'),
            tap(answer=>checkAnswer(answer as String))
        )
        const subscribe = values.subscribe();
        return()=>{
            subscribe.unsubscribe();
        }
    },[question])

    function checkAnswer(answer:String){
        if(answer===question["correct_answer"]){
            props.handleAnswer(true)
        } else {
            props.handleAnswer(false)
        }
    }

    return(
        <div className="questionContainer">
                        <Timer time={30} question={props.question}></Timer>
                        <p className="question">{question.question}</p>
                        <div className="answers">
                            {shuffledAnswers.map((answer:string,index:number)=>{
                                return(
                                    <button
                                    data-answer={answer}
                                    className="answer"
                                    key={index}
                                    >
                                        {answer}
                                    </button>
                                    )
                                })
                            }
                        </div>
            </div>
    )
}

export default Question;