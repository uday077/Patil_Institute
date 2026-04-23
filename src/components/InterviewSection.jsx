import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Bot, Users, MonitorPlay } from 'lucide-react';
import SEO from './SEO';

const InterviewSection = () => {
  const { t } = useLanguage();

  const rounds = [
    {
      id: 'ai',
      icon: <Bot size={24} />,
      data: t.interview.ai,
    },
    {
      id: 'hr',
      icon: <Users size={24} />,
      data: t.interview.hr,
    },
    {
      id: 'tech',
      icon: <MonitorPlay size={24} />,
      data: t.interview.tech,
    },
  ];

  return (
    <section id="interview" className="container">
      <SEO 
        title="Mock Interviews" 
        description="Practice your IT interviews with our Mock Interview rounds. Prepare for AI, HR, and Technical rounds to land your dream job." 
        path="/interview" 
      />
      <div className="section-header">
        <h2>{t.interview.title}</h2>
        <p>{t.interview.desc}</p>
      </div>

      <div className="grid">
        {rounds.map((round) => (
          <div key={round.id} className="card glass" style={{ borderTop: '4px solid #8b5cf6' }}>
            <div className="card-icon" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
              {round.icon}
            </div>
            <h3>{round.data.title}</h3>
            <p>{round.data.desc}</p>
            <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
              {t.interview.practiceBtn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterviewSection;
