export const placePeg = (input) => {
  return {
    type: 'PLACE_PEG',
    result: input,
  };
};

export const incrementTurn = (input) => {
  return {
    type: 'INCREMENT_TURN',
    result: input,
  };
};

export const checkRow = (input) => {
  return {
    type: 'CHECK_ROW',
    result: input,
  };
};