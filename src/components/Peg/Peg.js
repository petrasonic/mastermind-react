import React from 'react';

const Peg = (props) => {
  const {
    colour,
    results = false
  } = props;
  const type = results ? 'small-circle' : 'circle';
  return <div className={`${type} ${colour}`} />;
};

export default Peg;