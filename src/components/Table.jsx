import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Vardas</th>
          <th className='darker'>Pavardė</th>
          <th>Amžius</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
