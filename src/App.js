import './App.css';
import { useState } from 'react';
import Counter from './Components/Counter';

function App() {
  let [counter, setCounter] = useState(0);
  let [name, setName] = useState(true);
  const [text, setText] = useState('');

  console.log(text);
  const handleIncrement = () => {
    setCounter(++counter);
    console.log('Incremented');
    setName(!name);
  }
  const handleDecrement = () => {
    setCounter(counter - 1);
    console.log("Decremented");
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
      {name && <p>Selvaa</p>}
      <Counter counter={counter} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
