import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setData(data.message));
  });

  return (
    <div className="App">
      <header className="App-header">  
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}
