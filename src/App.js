import React from 'react';
import Quote from "./components/Quote.jsx";
import './App.css';

function App() {
  let message = "hey";

  return (
    <div className="App">
      <header className="App-header">
        <Quote message={message}/>
      </header>
    </div>
  );
}

export default App;
