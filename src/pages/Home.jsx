import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, GitBranch, UsersRound } from 'lucide-react';

export default function Home() {
  return (
    <main id="home">
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="eyebrow">Healthcare operations support</span>
          <h1>Make the messy parts of care operations easier to run.</h1>
          <p className="hero-copy">
            Dobar Health Consultants helps small healthcare, assisted living, and behavioral
            health teams clean up workflows, documentation, staff guides, and internal handoffs.
          </p>
          <div className="btn-group">
            <Link className="button primary" to="/contact">
              Schedule a 15-minute call
              <ArrowRight size={18} />
            </Link>
            <a className="button secondary" href="#services">View services</a>
          </div>
          <div className="hero-note">
            <CheckCircle2 size={18} />
            Fixed-scope projects for Kerrville and Texas Hill Country healthcare teams.
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Business focus">
        <div className="proof-item">
          <GitBranch size={24} />
          <strong>Workflow mapping</strong>
          <span>See where intake, referrals, handoffs, and incident paperwork break down.</span>
        </div>
        <div className="proof-item">
          <FileText size={24} />
          <strong>Documentation cleanup</strong>
          <span>Standardize forms, SOPs, policies, folders, naming, and version control.</span>
        </div>
        <div className="proof-item">
          <UsersRound size={24} />
          <strong>Staff process guides</strong>
          <span>Turn messy internal knowledge into checklists your team can actually use.</span>
        </div>
      </section>

      <section className="intro-section">
        <div>
          <span className="eyebrow">Why this exists</span>
          <h2>Most small teams are not broken. Their systems are just living in too many places.</h2>
        </div>
        <div className="intro-copy">
          <p>
            A form is in one folder. A newer version is in someone's email. A handoff process is
            known by one experienced staff member. The result is more rework, more questions, and
            more opportunities for something important to be missed.
          </p>
          <p>
            The work here is practical: map the real process, clean the documents, build simple
            guides, and leave your team with tools they can use the next day.
          </p>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-header">
          <span className="eyebrow">Services</span>
          <h2>Choose one focused problem and get a clear deliverable.</h2>
          <p>
            No open-ended mystery engagement. Each service has a defined scope, clear output, and
            upfront price range.
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
            <Link to="/services/workflow-snapshot" className="card-link">Learn more <ArrowRight size={16} /></Link>
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
            <Link to="/services/documentation-cleanup" className="card-link">Learn more <ArrowRight size={16} /></Link>
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
            <Link to="/services/staff-training-kit" className="card-link">Learn more <ArrowRight size={16} /></Link>
          </article>

          <article className="service-card wide-card">
            <div>
              <span className="price">$1,500-$4,000</span>
              <h3>Behavioral Health & Assisted Living Ops Package</h3>
              <p>
                A deeper operations package for incident documentation, family communication,
                safety-event reporting, med-adjacent tracking, and handoff consistency.
              </p>
              <Link to="/services/behavioral-health-ops" className="button primary">View package details</Link>
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
              <span className="step-num">04</span>
              <h3>Walk through</h3>
              <p>Review the findings, answer questions, and identify the best next project.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="audience-section">
        <div className="audience-card">
          <span className="eyebrow">Built for</span>
          <h2>Small healthcare teams that need clarity without a giant implementation.</h2>
          <div className="audience-list">
            <span>Small practices</span>
            <span>Assisted living</span>
            <span>Behavioral health</span>
            <span>Home health</span>
            <span>Therapy groups</span>
            <span>Solo practitioners</span>
          </div>
        </div>
        <div className="audience-image" aria-hidden="true"></div>
      </section>

      <section className="final-cta">
        <span className="eyebrow">Start simple</span>
        <h2>Tell me what keeps getting missed.</h2>
        <p>
          A short call is enough to decide whether the first step should be a process map, a
          document cleanup, or staff-facing guides.
        </p>
        <Link className="button primary" to="/contact">
          Go to contact page
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
