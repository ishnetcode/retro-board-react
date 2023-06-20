import React, { useState } from 'react';
import Card from './Card';

const Column = ({ columnName, cards, addCardToColumn }) => {
  const [newCardText, setNewCardText] = useState('');

  const handleAddCard = () => {
    if (newCardText) {
      addCardToColumn(columnName, newCardText);
      setNewCardText('');
    }
  };

  return (
    <div className="column">
      <h3>{columnName}</h3>
      <div className="card-list">
        {cards.map((card, index) => (
          <Card key={index} text={card} />
        ))}
      </div>
      <div className="card-input">
        <input
          type="text"
          value={newCardText}
          onChange={e => setNewCardText(e.target.value)}
          placeholder="Enter a new card"
        />
        <button onClick={handleAddCard}>Add Card</button>
      </div>
    </div>
  );
};

export default Column;
