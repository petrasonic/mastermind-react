export const placePeg = (input) => {
  return {
    type: 'PLACE_PEG',
    result: input,
  };
};

export const clearRow = (input) => {
  return {
    type: 'CLEAR_ROW',
    result: 'test2',
  };
};