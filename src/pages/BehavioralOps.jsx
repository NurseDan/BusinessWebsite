import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function BehavioralOps() {
  return (
    <main className="page-content" style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--limestone)' }}>
      <div className="section" style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '4rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', marginBottom: '2rem', fontWeight: '600' }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <span className="eyebrow">Premium Service Package</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'var(--terracotta)' }}>Behavioral Health & Assisted Living Ops Package</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--muted)', marginBottom: '3rem' }}>
          A deeper operations package designed specifically for the high-liability, high-friction realities of incident documentation, family communication, safety-event reporting, med-adjacent tracking, and handoff consistency.
        </p>

        <div style={{ background: '#fff', padding: '3rem', borderRadius: '20px', boxShadow: 'var(--shadow-sm)', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--sage-dark)' }}>What you get</h2>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1.5rem' }}>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>2-3 Connected Process Maps</strong>
                <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>We map complex, multi-stage workflows (e.g., from an incident occurring on the floor to the state reporting and family notification).</p>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Custom SOP Drafts</strong>
                <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>Standard Operating Procedures written with regulatory clarity in mind, outlining exact expectations for staff at every level.</p>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Staff-Facing Guides and Checklists</strong>
                <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>Translating those high-level SOPs into actionable, clip-board ready checklists for the floor staff.</p>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Tracking Templates & 60-Day Follow-Up</strong>
                <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>Tools to audit compliance with the new systems, plus a check-in at 30 and 60 days to adjust anything that isn't working in reality.</p>
              </div>
            </li>
          </ul>
        </div>

        <div style={{ textAlign: 'center', background: 'var(--sage-dark)', color: '#fff', padding: '4rem 2rem', borderRadius: '20px' }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready for clinical-grade operational clarity?</h2>
          <p style={{ color: 'var(--sage-light)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>Pricing is fixed upfront between $1,500 and $4,000 depending on facility size and complexity.</p>
          <a href="/#contact" className="button primary">Schedule a 15-minute Discovery Call</a>
        </div>
      </div>
    </main>
  );
}
