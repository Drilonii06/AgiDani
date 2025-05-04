import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ConcreteProducts from './pages/ConcreteProducts';
import StoneProducts from './pages/StoneProducts';
import Machinery from './pages/Machinery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/concrete-products" element={<ConcreteProducts />} />
          <Route path="/stone-products" element={<StoneProducts />} />
          <Route path="/machinery" element={<Machinery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;