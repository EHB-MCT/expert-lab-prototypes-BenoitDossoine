import {createAction} from "@reduxjs/toolkit";
import Player from "../../interfaces/Player";

export const updatePlayers = createAction<Player>('@@PLAYERLIST/UPDATE');