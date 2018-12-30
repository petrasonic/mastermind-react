export const placePeg = (input) => {
  return {
    type: 'PLACE_PEG',
    result: input,
  };
};

export const incrementTurn = (turn) => {
  return {
    type: 'INCREMENT_TURN',
    result: turn,
  };
};

export const checkRow = (guess, code, turn) => {
  // TODO: return the result peg array here
  return {
    type: 'CHECK_ROW',
    result: {
      result: ['red', 'white', null, null],
      turn,
    },
  };
};