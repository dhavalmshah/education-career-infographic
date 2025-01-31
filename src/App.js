import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import CareerReport from './components/CareerReport';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/:career"
          element={<CareerReport />}
        />
      </Routes>
    </Router>
  );
}

export default App;