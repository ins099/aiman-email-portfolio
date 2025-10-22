import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ marginTop: '80px', padding: '2rem' }}>
        <h1>Welcome to Aiman Iqbal's Portfolio</h1>
        <p>This is a placeholder content. The navbar is now working with all the requested features.</p>
      </div>
    </div>
  );
}

export default App;
