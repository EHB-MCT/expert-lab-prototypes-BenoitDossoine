import { PlayerListState } from './Players/InitialState';
import { Store} from 'redux';

export interface StoreState extends Store{
    playerList: PlayerListState;
}