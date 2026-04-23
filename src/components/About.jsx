import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Target } from 'lucide-react';
import SEO from './SEO';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="container" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', marginTop: '4rem' }}>
      <SEO 
        title="About Us" 
        description="Learn about Patil Institute's mission to bridge the gap between rural students and the IT industry." 
        path="/about" 
      />
      <div className="section-header">
        <h2>{t.about.title}</h2>
      </div>

      <div className="glass" style={{ padding: '3rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <Target size={48} color="#10b981" style={{ margin: '0 auto 1.5rem' }} />
        <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>{t.about.goal}</h3>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
          {t.about.desc}
        </p>
      </div>
    </section>
  );
};

export default About;
