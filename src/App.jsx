import { useEffect, useState } from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Buttons from './components/Buttons';
import Table from './components/Table';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [data, setData] = useState([]);

  const initialData = [
    { firstName: 'Jonas', lastName: 'Rimkus', age: 54 },
    { firstName: 'Vestina', lastName: 'Petronytė', age: 31 },
    { firstName: 'Marius', lastName: 'Dulinskas', age: 23 },
  ];

  useEffect(() => {
    setData(initialData);
  }, []);

  const handleAdd = () => {
    if (firstName.trim() !== '' && lastName.trim() !== '' && age.trim() !== '' && age > 0) {
      const newData = [...data, { firstName, lastName, age }];
      setData(newData);

      setFirstName('');
      setLastName('');
      setAge('');
    } else {
      alert('Užpildykite visus langelius ir įsitikinkite, kad amžius yra teisingas');
    }
  };

  const handleRemoveFirst = () => {
    if (data.length === 0) {
      alert('Jau viską ištrynėt');
      return;
    }

    const newData = [...data];
    newData.shift();
    setData(newData);
  };

  const handleRemoveLast = () => {
    if (data.length === 0) {
      alert('Jau viską ištrynėt');
      return;
    }

    const newData = [...data];
    newData.pop();
    setData(newData);
  };

  return (
    <>
      <h1>Append table</h1>
      <Inputs
        firstName={firstName}
        lastName={lastName}
        age={age}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setAge={setAge}
        handleAdd={handleAdd}
      />
      <Buttons handleRemoveFirst={handleRemoveFirst} handleRemoveLast={handleRemoveLast} handleAdd={handleAdd} />
      <Table data={data} />
    </>
  );
}

export default App;
