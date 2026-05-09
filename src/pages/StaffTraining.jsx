import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function StaffTraining() {
  return (
    <main className="page-content" style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--limestone)' }}>
      <div className="section" style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '4rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', marginBottom: '2rem', fontWeight: '600' }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <span className="eyebrow">Service Package</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Staff Training Kit</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--muted)', marginBottom: '3rem' }}>
          Convert daily processes into quick guides, onboarding packets, checklists, and escalation references. Take the knowledge out of your manager's head and put it on paper.
        </p>

        <div style={{ background: '#fff', padding: '3rem', borderRadius: '20px', boxShadow: 'var(--shadow-sm)', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--sage-dark)' }}>What you get</h2>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1.5rem' }}>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Up to 5 Quick Guides</strong>
                <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>One-page "cheat sheets" for your most common or most confusing daily workflows.</p>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Role-Specific Onboarding Packet</strong>
                <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>A standardized checklist of exactly what a new hire needs to read, sign, and shadow in their first week.</p>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>One Escalation Tree</strong>
                <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>A clear visual guide telling staff exactly who to call when things go wrong - no more guessing in an emergency.</p>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Print-Ready PDF Files</strong>
                <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>Beautifully formatted, highly legible documents designed to be pinned to a corkboard or placed in a binder.</p>
              </div>
            </li>
          </ul>
        </div>

        <div style={{ textAlign: 'center', background: 'var(--sage-dark)', color: '#fff', padding: '4rem 2rem', borderRadius: '20px' }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to standardize your training?</h2>
          <p style={{ color: 'var(--sage-light)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>Pricing is fixed upfront between $500 and $1,500 depending on the depth of the guides required.</p>
          <a href="/#contact" className="button primary">Schedule a 15-minute Discovery Call</a>
        </div>
      </div>
    </main>
  );
}
