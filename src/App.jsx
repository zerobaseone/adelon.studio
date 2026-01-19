import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Links from './pages/Links';
import './App.css';

function App() {
  return (
    <Router basename="/adelon.studio">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/links" element={<Links />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
