import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Video, Target, Users, BookOpen, Presentation, CheckCircle, GraduationCap, Quote } from 'lucide-react';
import SEO from './SEO';

const Hero = () => {
  const { t, lang } = useLanguage();

  const diagramText = lang === 'en' ? {
    goal: "Our Core Goal",
    goalDesc: "To bridge the gap between rural talent and the IT industry by providing world-class guidance.",
    step1: "Awareness",
    step1Desc: "Understanding IT Fields & Roles",
    step2: "Preparation",
    step2Desc: "Mock Interviews & Resume Building",
    step3: "Success",
    step3Desc: "Landing the Dream IT Job"
  } : {
    goal: "आमचे मुख्य ध्येय",
    goalDesc: "उत्कृष्ट मार्गदर्शन देऊन ग्रामीण गुणवत्ता आणि आयटी उद्योग यांच्यातील दरी कमी करणे.",
    step1: "जागरूकता",
    step1Desc: "आयटी क्षेत्र आणि भूमिका समजून घेणे",
    step2: "तयारी",
    step2Desc: "मॉक इंटरव्ह्यू आणि रेझ्युमे बिल्डिंग",
    step3: "यश",
    step3Desc: "स्वप्नातील आयटी जॉब मिळवणे"
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 80px)', paddingBottom: '4rem' }}>
      <SEO 
        title="Home" 
        description="Empowering village students with IT career guidance and mock interviews. Find out how to start your IT career with Patil Institute." 
        path="/" 
      />
      
      {/* Top Welcome Banner */}
      <section className="container" style={{ padding: '4rem 1.5rem 2rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', padding: '0.5rem 1rem', borderRadius: '9999px', color: 'var(--primary)', fontWeight: '600', marginBottom: '1.5rem' }}>
          <GraduationCap size={20} /> Welcome to Patil Institute
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', background: 'linear-gradient(to right, #1e293b, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {t.hero.title}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
          {t.hero.subtitle}
        </p>
        <div className="hero-btns" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/guidance" className="btn btn-primary">
            {t.hero.cta} <ArrowRight size={20} />
          </Link>
          <Link to="/interview" className="btn btn-outline">
            <Video size={20} /> {t.hero.cta2}
          </Link>
        </div>
      </section>

      {/* Central Diagram Section */}
      <section className="container" style={{ marginTop: '3rem' }}>
        <div className="glass" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Target size={48} color="#10b981" style={{ margin: '0 auto 1rem' }} />
            <h2 style={{ color: 'var(--text-main)', fontSize: '2rem' }}>{diagramText.goal}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              {diagramText.goalDesc}
            </p>
          </div>

          {/* The Flow Diagram */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '2rem', position: 'relative' }}>
            
            <div className="glass" style={{ background: 'var(--bg-card)', padding: '2rem', textAlign: 'center', width: '250px', zIndex: 1, borderTop: '4px solid #3b82f6' }}>
              <BookOpen size={40} color="#3b82f6" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>1. {diagramText.step1}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{diagramText.step1Desc}</p>
            </div>

            <div className="glass" style={{ background: 'var(--bg-card)', padding: '2rem', textAlign: 'center', width: '250px', zIndex: 1, borderTop: '4px solid #8b5cf6' }}>
              <Presentation size={40} color="#8b5cf6" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>2. {diagramText.step2}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{diagramText.step2Desc}</p>
            </div>

            <div className="glass" style={{ background: 'var(--bg-card)', padding: '2rem', textAlign: 'center', width: '250px', zIndex: 1, borderTop: '4px solid #10b981' }}>
              <CheckCircle size={40} color="#10b981" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>3. {diagramText.step3}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{diagramText.step3Desc}</p>
            </div>

          </div>

        </div>
      </section>

      {/* Visual Roadmap Section with Photos */}
      <section className="container" style={{ marginTop: '5rem' }}>
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <h2>{t.hero.roadmapSection.title}</h2>
          <p>{t.hero.roadmapSection.desc}</p>
        </div>

        <div className="grid">
          {t.hero.roadmapSection.steps.map((step, index) => (
            <div key={index} className="card glass" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                <img src={step.img} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderBottom: '1px solid var(--glass-border)' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="container" style={{ marginTop: '5rem' }}>
        <div className="glass" style={{ padding: '3rem', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Founder Image */}
            <div style={{ textAlign: 'center', flex: '1 1 250px', maxWidth: '300px' }}>
              <div style={{ width: '250px', height: '250px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden', border: '4px solid var(--bg-card)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                {/* We use founder.jpg from the public folder */}
                <img src="/founder.jpg" alt="Uday Patil" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ marginTop: '1.5rem', fontSize: '1.5rem', color: 'var(--text-main)' }}>{t.hero.founderName}</h3>
            </div>

            {/* Founder Message */}
            <div style={{ position: 'relative', flex: '2 1 400px' }}>
              <Quote size={64} color="#e2e8f0" style={{ position: 'absolute', top: '-20px', left: '-20px', zIndex: 0, opacity: 0.5 }} />
              <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                {t.hero.founderTitle}
              </h2>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-muted)', position: 'relative', zIndex: 1, fontStyle: 'italic' }}>
                "{t.hero.founderMsg}"
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;
