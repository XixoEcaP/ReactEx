import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import ToDoApp from './components/toDoList/App';
import './App.css';

function App() {
  return (
    <Router basename="/ReactEx">
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/todo" element={<ToDoApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




