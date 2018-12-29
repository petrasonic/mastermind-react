let turn = 0;

export default (state=null, action) => {
  switch (action.type) {
    case 'INCREMENT_TURN':
      return action.result + 1;
    default:
      return state || turn;
  }
}