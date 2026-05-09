import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main id="home">
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="eyebrow">Healthcare Operations Support</span>
          <h1>Cleaner workflows. Clearer documentation. Fewer missed steps.</h1>
          <p className="hero-copy">
            Practical workflow, documentation, and staff process support for small practices,
            assisted living operators, and behavioral health teams across Kerrville and the Texas
            Hill Country.
          </p>
          <div className="btn-group">
            <a className="button primary" href="#contact">Schedule a 15-minute call</a>
            <a className="button secondary" href="#services">View service menu</a>
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Business focus">
        <div className="proof-item">
          <strong>Workflow mapping</strong>
          <span>See where intake, referrals, handoffs, and incident paperwork break down.</span>
        </div>
        <div className="proof-item">
          <strong>Documentation cleanup</strong>
          <span>Standardize forms, SOPs, policies, folders, naming, and version control.</span>
        </div>
        <div className="proof-item">
          <strong>Staff process guides</strong>
          <span>Turn messy internal knowledge into checklists your team can actually use.</span>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-header">
          <span className="eyebrow">Transparent Pricing</span>
          <h2>Fixed, upfront pricing at a fraction of traditional consulting rates.</h2>
          <p>
            No open-ended retainers or surprise bills. Start with one focused problem, get a clean deliverable, and know exactly what it costs before we begin.
          </p>
        </div>

        <div className="service-grid">
          <article className="service-card featured-card">
            <span className="price">$500-$1,200</span>
            <h3>Workflow Snapshot</h3>
            <p>
              One broken process reviewed, mapped, and returned with a plain-language action plan.
            </p>
            <ul>
              <li>Manager and staff interviews</li>
              <li>Current-state process map</li>
            </ul>
            <Link to="/services/workflow-snapshot" className="button primary" style={{marginTop: '2rem', display: 'inline-flex', width: 'fit-content'}}>Learn more</Link>
          </article>

          <article className="service-card">
            <span className="price">$750-$2,000</span>
            <h3>Documentation Cleanup</h3>
            <p>
              Forms, SOPs, policies, intake packets, and file structures cleaned into a working document library.
            </p>
            <ul>
              <li>Master forms inventory</li>
              <li>Cleaned core templates</li>
            </ul>
            <Link to="/services/documentation-cleanup" className="button secondary" style={{marginTop: '2rem', display: 'inline-flex', width: 'fit-content', color: 'var(--sage-dark)', borderColor: 'var(--sage-dark)'}}>Learn more</Link>
          </article>

          <article className="service-card">
            <span className="price">$500-$1,500</span>
            <h3>Staff Training Kit</h3>
            <p>
              Convert daily processes into quick guides, onboarding packets, checklists, and escalation references.
            </p>
            <ul>
              <li>Up to 5 quick guides</li>
              <li>Role-specific onboarding</li>
            </ul>
            <Link to="/services/staff-training-kit" className="button secondary" style={{marginTop: '2rem', display: 'inline-flex', width: 'fit-content', color: 'var(--sage-dark)', borderColor: 'var(--sage-dark)'}}>Learn more</Link>
          </article>

          <article className="service-card wide-card">
            <div>
              <span className="price">$1,500-$4,000</span>
              <h3>Behavioral Health & Assisted Living Ops Package</h3>
              <p>
                A deeper operations package for incident documentation, family communication,
                safety-event reporting, med-adjacent tracking, and handoff consistency.
              </p>
              <Link to="/services/behavioral-health-ops" className="button primary" style={{marginTop: '1rem', display: 'inline-flex', width: 'fit-content'}}>View Full Package Details</Link>
            </div>
            <ul>
              <li>2-3 connected process maps</li>
              <li>Custom SOP drafts</li>
              <li>Staff-facing guides and checklists</li>
              <li>Tracking templates and 60-day follow-up</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="process-container">
          <div className="process-copy">
            <span className="eyebrow">How it works</span>
            <h2>Built for busy operators who cannot pause the floor.</h2>
            <p>
              The work is designed to be lightweight for the client: short interviews, direct review
              of existing documents, practical maps, and outputs that can be used immediately.
            </p>
          </div>
          <div className="process-list">
            <div className="process-step">
              <span className="step-num">01</span>
              <h3>Discovery</h3>
              <p>Interview the owner, manager, and 2-4 staff members around the target process.</p>
            </div>
            <div className="process-step">
              <span className="step-num">02</span>
              <h3>Map & diagnose</h3>
              <p>Document what is actually happening, where work stalls, and what gets missed.</p>
            </div>
            <div className="process-step">
              <span className="step-num">03</span>
              <h3>Build the fix list</h3>
              <p>Deliver clean maps, revised documents, checklists, and ranked next steps.</p>
            </div>
            <div className="process-step">
              <span class="step-num">04</span>
              <h3>Walk through</h3>
              <p>Review the findings, answer questions, and identify the best next project.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
