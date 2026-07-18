import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const contactInfo = [
    {
      label: 'Email',
      value: 'imariya@ucsc.edu',
      href: 'mailto:imariya@ucsc.edu',
      Icon: FaEnvelope,
      ariaLabel: 'Send email to Indira',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/indira-m',
      href: 'https://www.linkedin.com/in/indira-m/',
      Icon: FaLinkedin,
      ariaLabel: "Visit Indira's LinkedIn profile",
      external: true,
    },
    {
      label: 'GitHub',
      value: 'github.com/IndiraMariya',
      href: 'https://github.com/IndiraMariya',
      Icon: FaGithub,
      ariaLabel: "Visit Indira's GitHub profile",
      external: true,
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">contact me</h2>

      <ul className="contact-list">
        {contactInfo.map((contact, index) => {
          const { Icon } = contact;
          return (
            <li key={index} className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <Icon />
              </span>
              <div className="contact-details">
                <span className="contact-label">{contact.label}:</span>
                <a
                  href={contact.href}
                  className="contact-link"
                  aria-label={contact.ariaLabel}
                  target={contact.external ? '_blank' : undefined}
                  rel={contact.external ? 'noopener noreferrer' : undefined}
                >
                  {contact.value}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Contact;
