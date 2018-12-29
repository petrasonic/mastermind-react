import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placePeg, incrementTurn } from '../../actions';
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
    const { incrementTurn, turn } = this.props;
    incrementTurn(turn);
  }

  render() {
    const {
      index,
      pegs,
      results,
      activeRow
    } = this.props;

    return (
      <tr>
        <td>{index}</td>
        {this.renderPegs(pegs)}
        <td className="results-cell">
          <Results results={results} index={index} />
        </td>
        <td>
          {activeRow && <button className="btn btn-default btn-xs" onClick={this.hanldeRowCheckClick}>Check</button>}
        </td>
      </tr>
    );
  }
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    row: state.row
  }
}

const mapDispatchToProps = { placePeg, incrementTurn };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Row);