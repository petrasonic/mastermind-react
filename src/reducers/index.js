import { combineReducers } from 'redux';
import BoardStateReducer from './reducer-board-state';
import TurnReducer from './reducer-turn';
import OtherReducer from './reducer-other';

const rootReducer = combineReducers({
  boardState: BoardStateReducer,
  turn: TurnReducer,
  gameState: OtherReducer
});

export default rootReducer;