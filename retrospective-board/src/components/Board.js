import React, { useState } from 'react';
import Column from './Column';

const Board = () => {
  const [columns, setColumns] = useState({
    'What went well': [],
    'What could be improved': [],
    'Action items': [],
  });

  const addCardToColumn = (columnName, card) => {
    setColumns(prevColumns => ({
      ...prevColumns,
      [columnName]: [...prevColumns[columnName], card],
    }));
  };

  return (
    <div className="board">
      {Object.entries(columns).map(([columnName, cards]) => (
        <Column
          key={columnName}
          columnName={columnName}
          cards={cards}
          addCardToColumn={addCardToColumn}
        />
      ))}
    </div>
  );
};

export default Board;
