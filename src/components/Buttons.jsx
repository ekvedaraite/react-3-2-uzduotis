import React from 'react';

const Buttons = ({ handleRemoveFirst, handleRemoveLast, handleAdd }) => {
  const handleClickAdd = () => {
    handleAdd(); // Remove the conditional check
  };

  return (
    <div className='buttons'>
      <button id='add' onClick={handleClickAdd}>
        Pridėti
      </button>
      <button id='removeFirst' onClick={handleRemoveFirst}>
        Ištrinti pirmą
      </button>
      <button id='removeLast' onClick={handleRemoveLast}>
        Ištrinti paskutinį
      </button>
    </div>
  );
};

export default Buttons;
