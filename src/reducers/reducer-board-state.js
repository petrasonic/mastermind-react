import { BOARD_HEIGHT, BOARD_WIDTH } from '../config';

const board = [...Array(BOARD_HEIGHT).keys()].map(i => Array(BOARD_WIDTH));

export default (state=null, action) => {
  switch (action.type) {
    case 'PLACE_PEG':
      return action.result;
    case 'CLEAR_ROW':
      const { turn } = action.result;
      const newState = [...state];
      newState[turn] = Array(BOARD_WIDTH);
      return newState;
    default:
      return state || board;
  }
}