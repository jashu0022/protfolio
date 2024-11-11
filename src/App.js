import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    window.location.href = "https://jashu0022.github.io/protfolio_jashu/";
  };

  return (
    <div className="App">
      <div className="button-container">
        <p>Portfolio has moved to a new domain</p>
        <button className="styled-button" onClick={handleClick}>
          Open Portfolio
        </button>
      </div>
    </div>
  );
}

export default App;
