const boardHeight = 10;
const boardWidth = 4;

const results = [...Array(boardHeight).keys()].map(i => Array(boardWidth));

export default (state=null, action) => {
  switch (action.type) {
    case 'CHECK_ROW':
      const {
        turn,
        result
      } = action.result;
      const newState = [...state];
      newState[turn] = result;
      return newState;
    default:
      return state || results;
  }
}