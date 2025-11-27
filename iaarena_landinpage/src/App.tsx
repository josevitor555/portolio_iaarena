// Style CSS
import './App.css'

// Import react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';

// Initialize smooth scrolling after component mount
setTimeout(() => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href') || '');
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}, 0);

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