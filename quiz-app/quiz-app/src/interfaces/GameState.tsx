import Player from "./Player";
import Question from "./Question";

interface GameState{
    "player": Player,
    "playing": Boolean,
    "questions": Question[],
    "questionNumber": number
  }

export default GameState