import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Monitor, BookOpen, Route, Briefcase, GraduationCap, Code2, Database, Layers, Bug, Settings, PieChart, PenTool, Shield, Cloud, LayoutDashboard } from 'lucide-react';
import SEO from './SEO';

const icons = [
  <Code2 size={24} />, <Database size={24} />, <Layers size={24} />, <Bug size={24} />, 
  <Settings size={24} />, <PieChart size={24} />, <PenTool size={24} />, <Shield size={24} />, 
  <Cloud size={24} />, <LayoutDashboard size={24} />
];

const CareerGuidance = () => {
  const { t } = useLanguage();

  return (
    <section className="container" style={{ padding: '2rem 0 6rem' }}>
      <SEO 
        title="Career Guidance" 
        description="Comprehensive IT career guide. Learn how to enter the IT industry, the skills required, and explore profiles like Frontend, Backend, Data Science, and more." 
        path="/guidance" 
      />
      <div className="section-header">
        <h2>{t.guidance.title}</h2>
        <p>{t.guidance.desc}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {/* What is IT */}
        <div className="glass" style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '12px', color: '#3b82f6' }}>
              <Monitor size={32} />
            </div>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--text-main)' }}>{t.guidance.whatIsIT.title}</h3>
          </div>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            {t.guidance.whatIsIT.desc}
          </p>
        </div>

        {/* Basic Skills */}
        <div className="glass" style={{ padding: '2.5rem', borderLeft: '4px solid #10b981' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '12px', color: '#10b981' }}>
              <BookOpen size={32} />
            </div>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--text-main)' }}>{t.guidance.basics.title}</h3>
          </div>
          <ul style={{ listStylePosition: 'inside', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '2' }}>
            {t.guidance.basics.points.map((point, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Entry Pathways */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Route size={32} color="#8b5cf6" />
            <h3 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>{t.guidance.pathways.title}</h3>
          </div>
          <div className="grid">
            <div className="card glass">
              <GraduationCap size={32} color="#f59e0b" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1rem' }}>{t.guidance.pathways.after10th.title}</h4>
              <p style={{ color: 'var(--text-muted)' }}>{t.guidance.pathways.after10th.desc}</p>
            </div>
            <div className="card glass">
              <GraduationCap size={32} color="#f59e0b" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1rem' }}>{t.guidance.pathways.after12th.title}</h4>
              <p style={{ color: 'var(--text-muted)' }}>{t.guidance.pathways.after12th.desc}</p>
            </div>
            <div className="card glass">
              <GraduationCap size={32} color="#f59e0b" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1rem' }}>{t.guidance.pathways.afterGrad.title}</h4>
              <p style={{ color: 'var(--text-muted)' }}>{t.guidance.pathways.afterGrad.desc}</p>
            </div>
          </div>
        </div>

        {/* Job Profiles */}
        <div style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Briefcase size={32} color="#3b82f6" />
            <h3 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>{t.guidance.profilesTitle}</h3>
          </div>
          <div className="grid">
            {t.guidance.roles.map((role, index) => (
              <div key={index} className="card glass" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="card-icon">
                  {icons[index % icons.length]}
                </div>
                <h3>{role.title}</h3>
                <p style={{ flex: 1 }}>{role.desc}</p>
                <div className="salary-tag">💰 {role.salary}</div>
                <div className="roadmap">
                  <strong>Roadmap:</strong> <br />
                  {role.roadmap}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerGuidance;
