import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function DocCleanup() {
  return (
    <main className="page-content" style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--limestone)' }}>
      <div className="section" style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '4rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', marginBottom: '2rem', fontWeight: '600' }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <span className="eyebrow">Service Package</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Documentation Cleanup</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--muted)', marginBottom: '3rem' }}>
          Stop letting outdated forms and chaotic file structures slow your team down. We clean your forms, SOPs, policies, intake packets, and file structures into a working document library.
        </p>

        <div style={{ background: '#fff', padding: '3rem', borderRadius: '20px', boxShadow: 'var(--shadow-sm)', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--sage-dark)' }}>What you get</h2>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1.5rem' }}>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Master Forms Inventory</strong>
                <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>We hunt down every form being used (official or not) and create a central master index.</p>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Cleaned Core Templates</strong>
                <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>We standardize fonts, branding, signature lines, and phrasing across your most important documents.</p>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Folder and Naming Structure</strong>
                <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>A logical, searchable directory structure so your staff never wastes 15 minutes looking for a PDF again.</p>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Version-Control Tracker</strong>
                <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>A simple system to ensure nobody is printing out the 2021 version of the intake packet.</p>
              </div>
            </li>
          </ul>
        </div>

        <div style={{ textAlign: 'center', background: 'var(--sage-dark)', color: '#fff', padding: '4rem 2rem', borderRadius: '20px' }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready for an organized library?</h2>
          <p style={{ color: 'var(--sage-light)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>Pricing is fixed upfront between $750 and $2,000 depending on the volume of documents.</p>
          <a href="/#contact" className="button primary">Schedule a 15-minute Discovery Call</a>
        </div>
      </div>
    </main>
  );
}
