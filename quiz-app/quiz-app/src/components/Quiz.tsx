import Question from './Question';
function Quiz(props:any){

    let questions = props.gameState.questions;
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
                <Question question = {questions[props.gameState.questionNumber]} handleAnswer={handleAnswer}></Question>
            </>
        )
    }

    function handleAnswer(right:Boolean){
        props.client.emit("answer",{id:props.client.id,correct:right});
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