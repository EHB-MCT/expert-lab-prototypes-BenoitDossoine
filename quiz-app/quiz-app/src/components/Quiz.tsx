import { useNavigate } from "react-router-dom";

function Quiz(props:any){

    let questions = props.gameState.questions;
    console.log(questions);
    function waitForSecondPlayer(){
        return(
            <div className="waitDiv">
            <p>Welcome to the quiz!</p>
            <p>You are player {props.gameState.player.name}</p>
            <p>Let's wait for another player...</p>
            </div>
        )
    }

    function startQuiz(){
        return(
            <>
                {showQuestion(props.gameState.questionNumber)}
            </>
        )
    }

    function showQuestion(questionNumber:number){
        
        let allAnswers = [questions[questionNumber]["correct_answer"],...questions[questionNumber]["incorrect_answers"]];
        let shuffledAnswers = allAnswers.sort(()=>Math.random()-0.5);
        return(
            <div className="questionContainer">
                {props.gameState.player.status==="answered"?
                        <div>
                            <p>Waiting for the other player to answer...</p>
                        </div>
                    :<>
                        <p className="question">{questions[questionNumber].question}</p>
                        <div className="answers">
                            {shuffledAnswers.map((answer:string,index:number)=>{
                                return(
                                    <button
                                    className="answer"
                                    key={index}
                                    disabled={props.gameState.player.status==="answered"}
                                    onClick={()=>{
                                        checkAnswer(questionNumber,answer);
                                        props.gameState.questionNumber===questions.length-1?endGame():props.gameState.questionNumber++;
                                    }}>
                                    {answer}
                                    </button>
                                    )
                                })
                            }
                        </div>
                    </>
            }</div>
        )
    }

    function checkAnswer(questionNumber:number,answer:String){
        if(answer===questions[questionNumber].rightAnswer){
            props.client.emit("answer",{id:props.client.id,correct:true});
        } else {
            props.client.emit("answer",{id:props.client.id,correct:false});
        }
    }

    function endGame(){
        props.client.emit("end_player");
    }

    return(
        <div className="quizContainer">
            {props.gameState.playing?startQuiz():waitForSecondPlayer()}
        </div>
    )
}

export default Quiz;