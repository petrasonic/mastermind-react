import { combineReducers } from 'redux';
import BoardStateReducer from './reducer-board-state';
import TurnReducer from './reducer-turn';
import CodeReducer from './reducer-code';
import ResultsReducer from './reducer-results';
import EndGameReducer from './reducer-end-game';
import OtherReducer from './reducer-other';

const rootReducer = combineReducers({
  boardState: BoardStateReducer,
  turn: TurnReducer,
  code: CodeReducer,
  results: ResultsReducer,
  gameEnded: EndGameReducer,
  gameState: OtherReducer
});

export default rootReducer;