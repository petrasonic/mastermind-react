import React, { Component } from 'react';
import { connect } from "react-redux";
import { COLOURS } from '../../config';
import Modal from '../Modal';
import Row from '../Row';
import Peg from '../Peg';
import { clearRow, newGame } from '../../actions';
import './App.css';

class App extends Component {
  handleClearRowButtonClick = () => {
    const {
      clearRow,
      turn,
    } = this.props
    clearRow(turn);
  }

  handleNewGameButtonClick = () => {
    const { newGame } = this.props;
    newGame();
  }

  render() {
    const {
      boardState,
      results,
      code,
      turn,
      gameEnded,
      showEndGameModal,
    } = this.props;

    return (
      <div className="container">
        <div className="text-center body">
          <h1 className="text-center">Mastermind</h1>
          <div className="board-container">
            <table className="board" data-intro="Try to guess the hidden pattern in under 10 tries" data-position="left">
              <tbody>
                <tr className={gameEnded ? '' : 'closed-hood'}>
                  <td>&nbsp;</td>
                  {code.map((peg, index) => (
                    <td className={gameEnded ? 'open-hood-cell' : ''} key={`code-${index}`}>
                      {!gameEnded ? '?' : <Peg colour={peg} />}
                    </td>
                  ))}
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                {boardState.map((row, index) => (
                  <Row
                    index={index + 1}
                    pegs={row}
                    rowResults={results[index]}
                    turn={turn}
                    activeRow={turn === index}
                    key={index}
                  />
                ))}
              </tbody>
            </table>

            <div className="selection-area" data-intro="Select pegs by clicking on them" data-position="left">
              {COLOURS.map(colour => (
                <Peg colour={colour} key={`selection-${colour}`} clickable />
              ))}
              <button
                type="button"
                name="clear"
                className="btn btn-default btn-xs btn-block"
                onClick={this.handleClearRowButtonClick}
                disabled={gameEnded}
              >
                Clear Current Row
              </button>
            </div>

          </div>

          <div className="well center-block">
            <button
              type="button"
              name="newGame"
              className="btn btn-primary btn-block"
              onClick={this.handleNewGameButtonClick}
            >
              New Game
            </button>
            <button type="button" name="clear" className="btn btn-success btn-block" data-intro="Have the computer think for you 🤖" data-position="left">Play Self</button>
            {/* <button type="button" name="help" className="btn btn-default btn-block">Help</button> */}
          </div>

          {/* TODO: Make modal show if you lose the game and say you lost. */}
          <Modal
            show={showEndGameModal}
            title="You win"
            content={<p>Congrats! <span role="img" aria-label="thumbs up">👍🏻</span></p>}
          />
        </div>
        <footer>&copy; Dave Petrasovic</footer>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return state;
}

const mapDispatchToProps = { clearRow, newGame };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);