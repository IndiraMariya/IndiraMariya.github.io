// import React from 'react';
import './Contact.css';

function Contact() {
  const contactInfo = [
    {
      label: 'Email',
      value: 'imariya@ucsc.edu',
      href: 'mailto:imariya@ucsc.edu',
      icon: '1',
      ariaLabel: 'Send email to Indira'
    },
    {
      label: 'Phone',
      value: '+1 (650) 448-8454',
      href: 'tel:+16504488454',
      icon: '2',
      ariaLabel: 'Call Indira'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/indira-m/',
      href: 'https://www.linkedin.com/in/indira-m/',
      icon: '3',
      ariaLabel: 'Visit Indira\'s LinkedIn profile',
      external: true
    },
    {
      label: 'GitHub',
      value: 'github.com/IndiraMariya',
      href: 'https://github.com/IndiraMariya',
      icon: '4',
      ariaLabel: 'Visit Indira\'s GitHub profile',
      external: true
    }
  ];

  const handleContactClick = (label, href) => {
    // Optional: Add analytics tracking here
    console.log(`Contact method clicked: ${label}`);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">contact me</h2>
      
      <ul className="contact-list" role="list">
        {contactInfo.map((contact, index) => (
          <li key={index} className="contact-item">
            <span className="contact-icon" aria-hidden="true">
              {contact.icon}
            </span>
            <div className="contact-details">
              <span className="contact-label">{contact.label}:</span>
              <a
                href={contact.href}
                className="contact-link"
                aria-label={contact.ariaLabel}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noopener noreferrer' : undefined}
                onClick={() => handleContactClick(contact.label, contact.href)}
              >
                {contact.value}
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div className="contact-cta">
        <p>Feel free to reach out — I'd love to hear from you!</p>
      </div>
    </section>
  );
}

export default Contact;