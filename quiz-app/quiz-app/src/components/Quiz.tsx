
function Quiz(props:any){

    const questions = [
        {
            "question": "What is my name?",
            "rightAnswer": "Benoit",
            "wrongAnswers": ["Finn", "Ilyes"]
        }
    ]

    let questionNumber = 0;
    function waitForSecondPlayer(){
        return(
            <div className="waitDiv">
            <p>Welcome to the quiz!</p>
            <p>You are player {props.client.id}</p>
            <p>Let's wait for another player...</p>
            </div>
        )
    }

    function startQuiz(){
        console.log(props.gameState.players.find((player:any) => player.id==props.client.id).score)
        return(
            <>
                {showQuestion(questionNumber)}
                <div className="scores">
                    <p>Your score:{props.gameState.players.find((player:any) => player.id==props.client.id).score}</p>
                </div>
            </>
            
        )
    }

    function showQuestion(questionNumber:number){
        let allAnswers = [questions[questionNumber].rightAnswer,...questions[questionNumber].wrongAnswers];
        let shuffledAnswers = allAnswers.sort(()=>Math.random()-0.5);
        return(
            <div className="questionContainer">
                <p className="question">{questions[questionNumber].question}</p>
                <div className="answers">
                    <>
                    {shuffledAnswers.map((answer,index)=>{
                        return(
                            <button
                            className="answer"
                            key={index}
                            onClick={()=>checkAnswer(questionNumber,answer)}>
                                {answer}
                            </button>
                        )
                    })}
                    </>
                </div>
            </div>
        )
    }

    function checkAnswer(questionNumber:number,answer:String){
        if(answer===questions[questionNumber].rightAnswer){
            props.client.emit("answer",{id:props.client.id,correct:true});
        } else {
            props.client.emit("answer",{id:props.client.id,correct:false});
        }
    }

    return(
        <div className="quizContainer">
            {props.gameState.players.length<2?waitForSecondPlayer():startQuiz()}
        </div>
    )
}

export default Quiz;