import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

export default function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    axios.get('/api')
      .then(response => setData(response.data.message));
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
