import { PlayerListState } from './Players/InitialState';
import { PlayerListReducer } from './Players/Reducer';
import { useSelector } from 'react-redux';
import {applyMiddleware, combineReducers,createStore,Reducer} from "redux";
import thunk from "redux-thunk";
import { TypedUseSelectorHook } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers<Reducer>({
    playerList:PlayerListReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export const useTypedSelector: TypedUseSelectorHook<PlayerListState> = useSelector;