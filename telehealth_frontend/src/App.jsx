import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DoctorList from './components/DoctorList';
import Appointments from './components/Appointments';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={DoctorList} />
        <Route path="/appointments" component={Appointments} />
      </Routes>
    </Router>
  );
}

export default App;
