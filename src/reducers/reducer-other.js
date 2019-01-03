const gameState = {
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