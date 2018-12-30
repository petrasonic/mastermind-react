const boardWidth = 4;
const colours = ['red','green','blue','yellow','brown','orange','black','white'];

const code = [...new Array(boardWidth)].map((_, i) => colours[Math.floor(Math.random() * colours.length)]);

export default (state=null, action) => {
  switch (action.type) {
    // TODO
    // case 'NEW_GAME':
    //   return action.result;
    default:
      return state || code;
  }
}