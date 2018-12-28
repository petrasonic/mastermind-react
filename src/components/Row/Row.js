import React from 'react';
import Peg from '../Peg';
import Results from '../Results';

const Row = (props) => {
  const {
    index,
    pegs,
    results,
    activeRow
  } = props;
  return (
    <tr>
      <td>{index}</td>
      {pegs.map((peg, index) => (
        <td className="peg-cell" key={index}>
          <Peg colour={peg} />
        </td>
      ))}
      <td className="results-cell">
        <Results results={results} />
      </td>
      <td>
        {activeRow && <button className="btn btn-default btn-xs">Check</button>}
      </td>
    </tr>
  );
};

export default Row;