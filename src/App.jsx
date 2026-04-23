import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CareerGuidance from './components/CareerGuidance';
import InterviewSection from './components/InterviewSection';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer>
      <p>{t.footer}</p>
    </footer>
  );
};

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 100px)' }}>
      {children}
    </main>
    <Footer />
  </>
);

function AppContent() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/guidance" element={<CareerGuidance />} />
          <Route path="/interview" element={<InterviewSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
