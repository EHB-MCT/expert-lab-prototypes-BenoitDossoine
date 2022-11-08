
import Timer from './Timer';

function Question(props:any){
    const question = props.question;
    let allAnswers = [question["correct_answer"],...question["incorrect_answers"]];
    let shuffledAnswers = allAnswers.sort(()=>Math.random()-0.5);

    

    return(
        <div className="questionContainer">
                        <Timer time={30}></Timer>
                        <p className="question">{question.question}</p>
                        <div className="answers">
                            {shuffledAnswers.map((answer:string,index:number)=>{
                                return(
                                    <button
                                    className="answer"
                                    key={index}
                                    // disabled={props.gameState.player.status==="answered"}
                                    // onClick={()=>{
                                    //     checkAnswer(questionNumber,answer);
                                    //     props.gameState.questionNumber===questions.length-1?endGame():props.gameState.questionNumber++;
                                    // }}
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