import React from 'react';
import './Chart.css';

function Cell({ isWall }) {
  return (
    <div className={`cell ${isWall ? 'wall' : ''}`}>
    </div>
  );
}

function Chart() {
  const mazeData = [
    [false, true, false, false],
    [false, false, true, false],
    [false, true, false, false],
    [true, false, false, true],
  ];

  return (
    <div className="container">
      {mazeData.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cellValue, cellIndex) => (
            <Cell key={`${rowIndex}-${cellIndex}`} isWall={cellValue} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Chart;
