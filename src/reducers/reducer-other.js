const boardWidth = 4;
const colours = ['red','green','blue','yellow','brown','orange','black','white'];

const gameState = {
  code: [...new Array(boardWidth)].map((_, i) => colours[Math.floor(Math.random() * colours.length)]),
  endGame: false,
  showEndGameModal: false,
};

export default (state=null, action) => {
  switch (action.type) {
    // case 'PLACE_PEG':
    //   return action.result;
    default:
      return gameState;
  }
}