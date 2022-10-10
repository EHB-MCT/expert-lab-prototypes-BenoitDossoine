import Player from "./Player";

interface GameState{
    "players": Player[],
    "playing": Boolean,
  }

export default GameState