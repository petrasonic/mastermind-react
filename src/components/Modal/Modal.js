import React from 'react';
import { connect } from 'react-redux'
import { closeModal } from '../../actions'

class Modal extends React.Component {
  handleCloseClick = () => {
    const { closeModal } = this.props;
    closeModal();
  }

  render() {
    const {
      show = false,
      title,
      content,
    } = this.props;

    if (!show) return null;

    return (
      <div className="mini-modal">
        <div
          className="close-btn"
          onClick={this.handleCloseClick}
        >
          &times;
        </div>
        <h3>{title}</h3>
        {content}
      </div>
    );
  }
};

const mapStateToProps = (state /*, ownProps*/) => {
  return state;
}

export default connect(
  mapStateToProps,
  { closeModal }
)(Modal);