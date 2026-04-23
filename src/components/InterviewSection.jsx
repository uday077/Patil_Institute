import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Bot, Users, MonitorPlay } from 'lucide-react';
import SEO from './SEO';

const InterviewSection = () => {
  const { t } = useLanguage();

  const rounds = [
    {
      id: 'ai',
      icon: <Bot size={32} color="#8b5cf6" />,
      title: t.interview.rounds.ai.title,
      desc: t.interview.rounds.ai.desc,
      img: t.interview.rounds.ai.img
    },
    {
      id: 'hr',
      icon: <Users size={32} color="#10b981" />,
      title: t.interview.rounds.hr.title,
      desc: t.interview.rounds.hr.desc,
      img: t.interview.rounds.hr.img
    },
    {
      id: 'tech',
      icon: <MonitorPlay size={32} color="#3b82f6" />,
      title: t.interview.rounds.tech.title,
      desc: t.interview.rounds.tech.desc,
      img: t.interview.rounds.tech.img
    }
  ];

  return (
    <section id="interview" className="container" style={{ padding: '6rem 1.5rem' }}>
      <SEO 
        title="Mock Interview Program" 
        description="Join our signature 3-stage mock interview program. Practice AI, HR, and Technical rounds to land your dream IT job." 
        path="/interview" 
      />
      <div className="section-header" style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '1rem' }}>{t.interview.title}</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>{t.interview.desc}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
        {rounds.map((round, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={round.id} style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
              
              {/* Image Column - Alternates left/right based on index */}
              <div style={{ flex: '1 1 400px', order: isEven ? 1 : 2, width: '100%', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)', position: 'relative' }}>
                <img src={round.img} alt={round.title} style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '16/9' }} />
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--bg-card)', padding: '0.75rem', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                  {round.icon}
                </div>
              </div>

              {/* Text Column */}
              <div style={{ flex: '1 1 400px', order: isEven ? 2 : 1 }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {round.title}
                </h3>
                <div style={{ width: '60px', height: '4px', background: 'var(--primary)', marginBottom: '1.5rem', borderRadius: '2px' }}></div>
                <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                  {round.desc}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InterviewSection;
