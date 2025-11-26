
// Style CSS
import './App.css'

// Import react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 404 not found */}
        <Route path="*" element={<h1>404 Not Found</h1>} />

        {/* Home route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
