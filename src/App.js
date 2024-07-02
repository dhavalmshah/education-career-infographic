import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import CareerInfographic from './components/CareerInfographic';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/:career"
          element={<CareerInfographic />}
        />
      </Routes>
    </Router>
  );
}

export default App;