import React from 'react';
import Peg from '../Peg';

const Results = (props) => {
  return (
    <div>
      {props.results.map((result, index) => (
        <Peg colour={result} results key={index} />
      ))}
    </div>
  );
};

export default Results;