import { StoreState } from "../store.types";
import { PlayerListState } from "./InitialState";
import { createSelector } from '@reduxjs/toolkit';

export const playerListStateSelector = (
    state: StoreState,
):PlayerListState => state.playerList;

export const selectPlayerList = createSelector(
    playerListStateSelector,
    (state:PlayerListState)=>state?.list || []
)