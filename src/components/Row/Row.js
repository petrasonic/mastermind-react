import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placePeg, incrementTurn, checkRow } from '../../actions';
import Peg from '../Peg';
import Results from '../Results';

class Row extends Component {
  renderPegs = (pegs) => {
    const { index } = this.props;
    const jsxPegs = [];
    for (let i=0; i<pegs.length; i+=1) { // .map does not iterate through empty arrays
      jsxPegs.push((
        <td className="peg-cell" key={`${index}-${i}`}>
          {pegs[i] && <Peg colour={pegs[i]} />}
        </td>
      ));
    }
    return jsxPegs;
  }

  hanldeRowCheckClick = () => {
    const {
      incrementTurn,
      turn,
      checkRow,
      pegs,
      code,
    } = this.props;
    const result = checkRow(pegs, code, turn).result.result;
    if(
      result.length===code.length &&
      'red' === result.reduce((previous, current) => (previous===current) ? previous : NaN)
    ) {
      alert('You Win!');
    } else {
      incrementTurn(turn);
    }
  }

  render() {
    const {
      index,
      pegs,
      rowResults,
      activeRow
    } = this.props;

    return (
      <tr>
        <td>{index}</td>
        {this.renderPegs(pegs)}
        <td className="results-cell">
          <Results rowResults={rowResults} index={index} />
        </td>
        <td>
          {activeRow && <button
            className="btn btn-default btn-xs"
            disabled={!pegs[pegs.length-1]}
            onClick={this.hanldeRowCheckClick}>
              Check
            </button>
          }
        </td>
      </tr>
    );
  }
};

const mapStateToProps = (state /*, ownProps*/) => {
  return state;
}

const mapDispatchToProps = { placePeg, incrementTurn, checkRow };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Row);