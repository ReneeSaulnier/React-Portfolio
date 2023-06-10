import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Experience from './components/experience';


const App = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
        </Routes>
        </Router>
    );
};

export default App;