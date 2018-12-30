import React from 'react';
import { connect } from 'react-redux'
import { placePeg } from '../../actions'

class Peg extends React.Component {
  handlePegClick = () => {
    const {
      colour,
      placePeg,
      boardState,
      turn,
    } = this.props;
    const newBoard = [...boardState];
    const currentRow = [...newBoard[turn]];
    const nextPegHole = currentRow.findIndex(element => !element);
    if (nextPegHole===-1) return;

    currentRow[nextPegHole] = colour;
    newBoard[turn] = currentRow;
    placePeg(newBoard);
  }

  render() {
    const {
      colour,
      result = false,
    } = this.props;

    const type = result ? 'small-circle' : 'circle';
    return <div className={`${type} ${colour}`} onClick={this.handlePegClick} />;
  }
};

const mapStateToProps = (state /*, ownProps*/) => {
  return state;
}

export default connect(
  mapStateToProps,
  { placePeg }
)(Peg);