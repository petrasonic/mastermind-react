import { combineReducers } from 'redux';
import BoardStateReducer from './reducer-board-state';
import OtherReducer from './reducer-other';

const rootReducer = combineReducers({
  boardState: BoardStateReducer,
  gameState: OtherReducer
});

export default rootReducer;