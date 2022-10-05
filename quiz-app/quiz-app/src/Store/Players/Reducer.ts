import { PlayerListState, initialState } from './InitialState';
import {createReducer} from "@reduxjs/toolkit";
import * as ACTIONS from './Actions'
import Player from '../../interfaces/Player';

export const PlayerListReducer = createReducer<PlayerListState>(
    initialState,
    (builder)=>{
        builder.addCase(ACTIONS.updatePlayers, (state,action)=>{
            let newPlayer:Player = {
                id: action.payload.id,
                name: action.payload.name,
                type: action.payload.type
            }
            return ({
                ...state,
                list: [...state.list,newPlayer]
            })
            
        })
    }
)