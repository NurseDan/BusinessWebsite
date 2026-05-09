import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function WorkflowSnapshot() {
  return (
    <main className="page-content" style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--limestone)' }}>
      <div className="section" style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '4rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', marginBottom: '2rem', fontWeight: '600' }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <span className="eyebrow">Service Package</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Workflow Snapshot</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--muted)', marginBottom: '3rem' }}>
          One broken process reviewed, mapped, and returned with a plain-language action plan. Get clarity on exactly where your team is getting stuck, and a prioritized list of how to fix it.
        </p>

        <div style={{ background: '#fff', padding: '3rem', borderRadius: '20px', boxShadow: 'var(--shadow-sm)', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--sage-dark)' }}>What you get</h2>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1.5rem' }}>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Manager and staff interviews</strong>
                <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>Brief, highly-focused 15-minute interviews with the people doing the work to find the hidden friction points.</p>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Current-state process map</strong>
                <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>A visual flowchart showing exactly what happens step-by-step, highlighting bottlenecks and dropped handoffs.</p>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Findings Report & Priority Fix List</strong>
                <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>A concise 3-5 page report detailing the root causes of the issue, followed by a ranked list of immediate, low-cost steps to resolve them.</p>
              </div>
            </li>
          </ul>
        </div>

        <div style={{ textAlign: 'center', background: 'var(--sage-dark)', color: '#fff', padding: '4rem 2rem', borderRadius: '20px' }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to clean up this workflow?</h2>
          <p style={{ color: 'var(--sage-light)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>Pricing is fixed upfront between $500 and $1,200 depending on the complexity of the process.</p>
          <a href="/#contact" className="button primary">Schedule a 15-minute Discovery Call</a>
        </div>
      </div>
    </main>
  );
}
