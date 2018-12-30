import { BOARD_WIDTH, COLOURS } from '../config';

const code = [...new Array(BOARD_WIDTH)].map((_, i) => COLOURS[Math.floor(Math.random() * COLOURS.length)]);

export default (state=null, action) => {
  switch (action.type) {
    // TODO
    // case 'NEW_GAME':
    //   return action.result;
    default:
      return state || code;
  }
}