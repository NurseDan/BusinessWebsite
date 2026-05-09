import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm({ compact = false }) {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    // Replace this key with your own from web3forms.com
    formData.append("access_key", "cb54a95e-9039-4d0d-8943-6ee5352ba3f2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Thank you! Your message has been sent directly to your email.");
        e.target.reset();
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className={`contact-section ${compact ? 'contact-section-standalone' : ''}`}>
      <div className="contact-copy">
        <span className="eyebrow">Start simple</span>
        <h2>Tell me what keeps getting missed.</h2>
        <p>
          Send a quick note about the process, document set, or staff handoff that needs cleanup.
          The best first step is usually a 15-minute call.
        </p>
        <div className="contact-details">
          <a href="mailto:hello@dobarhealth.com">
            <Mail size={20} />
            hello@dobarhealth.com
          </a>
          <a href="tel:+15550101234">
            <Phone size={20} />
            (555) 010-1234
          </a>
          <span className="contact-location">
            <MapPin size={20} />
            Kerrville, TX and remote
          </span>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="organization">Organization type</label>
          <select id="organization" name="organization" required>
            <option value="">Choose one</option>
            <option>Small practice</option>
            <option>Assisted living</option>
            <option>Behavioral health</option>
            <option>Home health</option>
            <option>Therapy group</option>
            <option>Other healthcare team</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">What needs cleanup?</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button className="button primary full-button" type="submit">Request a call</button>
        {status && <p className="form-status" role="status" aria-live="polite">{status}</p>}
      </form>
    </section>
  );
}
