function Quiz(props:any){
    const questions = [
        {
            "question": "What is my name?",
            "rightAnswer": "Benoit",
            "wrongAnswers": ["Mike", "Ilyes"]
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
        return(
            <>
                <div className="question">
                    {showQuestion(questionNumber)}
                </div> 
            </>
        )
    }

    function showQuestion(questionNumber:number){
        let allAnswers = [questions[questionNumber].rightAnswer,...questions[questionNumber].wrongAnswers];
        let shuffledAnswers = allAnswers.sort(()=>Math.random()-0.5);
        return(
            <div className="question">
                <p>{questions[questionNumber].question}</p>
                <div className="answers">
                    <>
                    {shuffledAnswers.map((answer,index)=>{
                        return(
                            <button className="answer" key={index} onClick={()=>checkAnswer(questionNumber,answer)}>{answer}</button>
                        )
                    })}
                    </>
                </div>
            </div>
        )
    }

    function checkAnswer(questionNumber:number,answer:String){
        if(answer==questions[questionNumber].rightAnswer){
            props.client.emit("right_answer",props.client.id);
        } else {
            props.client.emit("wrong_answer",props.client.id);
        }
    }

    return(
        <div className="quizContainer">
            {props.gameState.players.length<2?waitForSecondPlayer():startQuiz()}
        </div>
    )
}

export default Quiz;