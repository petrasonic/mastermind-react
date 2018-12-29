import React from 'react';
import Peg from '../Peg';

const Results = (props) => {
  const {
    index,
    results,
  } = props;
  const jsxPegs = [];
  for (let i=0; i<results.length; i+=1) {
    jsxPegs.push((
      results[i] && <Peg colour={results[i]} results key={`results-${index}-${i}`} />
    ));
  }
  return <div>{jsxPegs}</div>;
};

export default Results;