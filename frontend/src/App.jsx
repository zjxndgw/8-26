import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkerZone from './pages/WorkerZone';
import PersonalCenter from './pages/PersonalCenter';
import AdminZone from './pages/AdminZone';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/worker" element={<WorkerZone />} />
        <Route path="/personal" element={<PersonalCenter />} />
        <Route path="/admin" element={<AdminZone />} />
      </Routes>
    </Router>
  );
}

export default App;
