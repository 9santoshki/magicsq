import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import BODMASPuzzle from './pages/bodmas5';
import About from './pages/about';
import Contact from './pages/contact';
// import Generate from './pages/Generate';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BODMASPuzzle />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="/generate" element={<Generate />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
