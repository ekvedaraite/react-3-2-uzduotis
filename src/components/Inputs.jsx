import React from 'react';

const Inputs = ({ firstName, lastName, age, setFirstName, setLastName, setAge}) => {
  return (
    <div className='inputs'>
      <input
        type='text'
        id='firstName'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder='Vardas'
      />

      <input
        type='text'
        id='lastName'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder='Pavardė'
      />

      <input
        type='number'
        id='age'
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder='Amžius'
      />
    </div>
  );
};

export default Inputs;
