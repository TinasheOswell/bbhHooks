import React, { useState } from 'react';
import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sum, setSum] = useState(null);
  const [median, setMedian] = useState(null);

  const addPerson = () => {
    if (name && age) {
      setPeople([...people, { name, age: parseInt(age, 10) }]);
      setName('');
      setAge('');
    }
  };

  const handleCalculateSum = () => {
    console.log("people", people);
    console.log("name", name);
    var here = "here";
    const sum = calculateSum(people);
    setSum(sum);
  };

  const handleCalculateMedian = () => {
    var median = calculateMedian(people);
    setMedian(median);
  };

  return (
    <div className="App">
      <h2>People List</h2>
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <button onClick={addPerson}>Add Person</button>
      </div>
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person.name} - {person.age}</li>
        ))}
      </ul>
      <button onClick={handleCalculateSum}>Calculate Sum of Ages</button>
      <button onClick={handleCalculateMedian}>Calculate Median Age</button>
      <div className="results">
        {sum !== null && <div className="result">Sum of ages: {sum}</div>}
        {median !== null && <div className="result">Median of ages: {median}</div>}
      </div>
    </div>
  );
}

export default App;

export const calculateSum = (people) => {
  if (!people || people.length === 0) return 0;
  return people.reduce((acc, curr) => acc + curr.age, 0);
};

export const calculateMedian = (people) => {
  if (people.length === 0) return 0;
  const sortedAges = people.map(person => person.age).sort((a, b) => a - b);
  const mid = Math.floor(sortedAges.length / 2);
  return sortedAges.length % 2 !== 0 ? sortedAges[mid] : (sortedAges[mid - 1] + sortedAges[mid]) / 2;
};