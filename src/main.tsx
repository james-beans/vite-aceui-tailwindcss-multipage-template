import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import Og from './pages/og/og';
import Og2 from './pages/og2/og2';
import Home from './pages/home/home';

import './index.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container missing in index.html");
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/og" element={<Og />} />
        <Route path="/og2" element={<Og2 />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

const root = createRoot(container);
root.render(
  <StrictMode>
    <div className='dark'>
      <App />
    </div>
  </StrictMode>
);
