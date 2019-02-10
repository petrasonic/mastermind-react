import React from 'react';
import { connect } from 'react-redux'
import { placePeg } from '../../actions'

class Peg extends React.Component {
  handlePegClick = () => {
    const {
      colour,
      placePeg,
      clickable,
    } = this.props;
    if (!clickable) return;
    placePeg(colour);
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