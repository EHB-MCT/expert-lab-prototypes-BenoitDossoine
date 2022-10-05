import Player from "../../interfaces/Player"

export interface PlayerListState{
    loading: boolean,
    error: string,
    list: Player[]
}

export const initialState = {
    loading: false,
    error:"",
    list:[],
}