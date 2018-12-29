const boardHeight = 10;
const boardWidth = 4;

const board = [...Array(boardHeight).keys()].map(i => Array(boardWidth));

export default (state=null, action) => {
  switch (action.type) {
    case 'PLACE_PEG':
      return action.result;
    default:
      return board;
  }
}