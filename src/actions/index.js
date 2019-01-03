import { BOARD_WIDTH } from '../config';

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

export const checkRow = (originalGuess, code, turn) => {
  let resultIndex = 0;
  let guess = [...originalGuess];
  let codeToCheck = [...code];
  const result = [];

  //check exact matches
  for (let i=0; i<BOARD_WIDTH;i++) {
    if(guess[i]===code[i]){
      guess.splice(i,1, undefined);
      codeToCheck.splice(i,1, undefined);
      result[resultIndex] = 'red';
      resultIndex++;
    }
  }
  guess = guess.filter(n => n !== undefined);
  codeToCheck = codeToCheck.filter(n => n !== undefined);

  //check partial matches
  for (let i=0; i<guess.length; i++) {
    let indexInCode = codeToCheck.indexOf(guess[i]);
    if (indexInCode!==-1) {
      codeToCheck.splice(indexInCode,1);
      result[resultIndex] = 'white';
      resultIndex++;
    }
  }
  return {
    type: 'CHECK_ROW',
    result: {
      result,
      turn,
    },
  };
};

export const clearRow = (turn) => {
  return {
    type: 'CLEAR_ROW',
    result: {
      turn,
    }
  };
}

export const newGame = (turn) => {
  return {
    type: 'NEW_GAME',
  };
}