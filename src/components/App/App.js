import React, { Component } from 'react';
import { connect } from "react-redux";
import Row from '../Row';
import Peg from '../Peg';
import './App.css';

class App extends Component {
  render() {
    const {
      // colours,
      boardState,
      gameState,
      // results,
      turn,
    } = this.props;
    const {
      results,
      colours
    } = gameState;
    return (
      <div className="container">
        <div className="text-center body">
          <h1 className="text-center">Mastermind</h1>
          <div className="board-container">
            <table className="board" data-intro="Try to guess the hidden pattern in under 10 tries" data-position="left">
              <tbody>
                <tr className="closed-hood">
                  <td>&nbsp;</td>

                  <td className="open-hood-cell">
                    <Peg colour="red" />
                  </td>
                  <td className="open-hood-cell">
                    <Peg colour="red" />
                  </td>
                  <td className="open-hood-cell">
                    <Peg colour="red" />
                  </td>
                  <td className="open-hood-cell">
                    <Peg colour="red" />
                  </td>

                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                {boardState.map((row, index) => (
                  <Row
                    index={index + 1}
                    pegs={row}
                    results={results[index]}
                    turn={turn}
                    activeRow={turn === index}
                    key={index}
                  />
                ))}
              </tbody>
            </table>

            <div className="selection-area" data-intro="Select pegs by clicking on them" data-position="left">
              {colours.map(colour => (
                <Peg colour={colour} key={`selection-${colour}`} />
              ))}
              <button type="button" name="clear" className="btn btn-default btn-xs btn-block">Clear Current Row</button>
            </div>

          </div>

          <div className="well center-block">
            <button type="button" name="newGame" className="btn btn-primary btn-block">New Game</button>
            <button type="button" name="clear" className="btn btn-success btn-block" data-intro="Have the computer think for you 🤖" data-position="left">Play Self</button>
            {/* <button type="button" name="help" className="btn btn-default btn-block">Help</button> */}
          </div>

        </div>
        <footer>&copy; Dave Petrasovic</footer>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return state;
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(App);