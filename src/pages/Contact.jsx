import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <main className="page-shell">
      <section className="page-hero contact-hero">
        <div className="page-hero-content">
          <span className="eyebrow">Contact</span>
          <h1>Start with the workflow that is causing the most friction.</h1>
          <p>
            Share a little context about your practice, facility, or team. You do not need a
            polished scope yet. A short call is enough to decide whether a Workflow Snapshot,
            documentation sprint, or training kit is the right starting point.
          </p>
        </div>
      </section>

      <ContactForm compact />
    </main>
  );
}
