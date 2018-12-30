import { combineReducers } from 'redux';
import BoardStateReducer from './reducer-board-state';
import TurnReducer from './reducer-turn';
import CodeReducer from './reducer-code';
import ResultsReducer from './reducer-results';
import OtherReducer from './reducer-other';

const rootReducer = combineReducers({
  boardState: BoardStateReducer,
  turn: TurnReducer,
  code: CodeReducer,
  results: ResultsReducer,
  gameState: OtherReducer
});

export default rootReducer;