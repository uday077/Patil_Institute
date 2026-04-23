import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import SEO from './SEO';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="container">
      <SEO 
        title="Connect With Us" 
        description="Get in touch with Patil Institute via WhatsApp, phone, or email. We are here to help you start your IT career." 
        path="/contact" 
      />
      <div className="section-header">
        <h2>{t.contact.title}</h2>
        <p>{t.contact.desc}</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', maxWidth: '1000px', margin: '0 auto' }}>
        <a href="https://chat.whatsapp.com/placeholder" target="_blank" rel="noreferrer" className="card glass" style={{ textAlign: 'center', display: 'block' }}>
          <MessageCircle size={48} color="#10b981" style={{ margin: '0 auto 1.5rem' }} />
          <h3 style={{ color: 'var(--text-main)' }}>WhatsApp</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{t.contact.whatsapp}</p>
          <span className="btn btn-success">Join Group</span>
        </a>

        <a href="tel:+918530520203" className="card glass" style={{ textAlign: 'center', display: 'block' }}>
          <Phone size={48} color="#3b82f6" style={{ margin: '0 auto 1.5rem' }} />
          <h3 style={{ color: 'var(--text-main)' }}>Phone</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{t.contact.phone}</p>
          <span className="btn btn-primary">Call Now</span>
        </a>

        <a href="mailto:udaypatil0607@gmail.com" className="card glass" style={{ textAlign: 'center', display: 'block' }}>
          <Mail size={48} color="#f59e0b" style={{ margin: '0 auto 1.5rem' }} />
          <h3 style={{ color: 'var(--text-main)' }}>Email</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{t.contact.email}</p>
          <span className="btn btn-outline" style={{ borderColor: '#f59e0b', color: '#f59e0b' }}>Email Us</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
