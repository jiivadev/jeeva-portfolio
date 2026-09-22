import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCheck,
} from 'react-icons/fa';

function Contact() {
  const email = 'jackjeevajiiva@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <section id='contact' className='section contact-section'>
      <div className='contact-glow contact-glow-one'></div>
      <div className='contact-glow contact-glow-two'></div>

      <div className='contact-container-new'>
        {/* Heading */}

        <div className='contact-heading'>
          <span className='contact-label'>GET IN TOUCH</span>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p>
            I'm interested in building reliable software, solving complex
            engineering problems and working on systems that create real-world
            impact.
          </p>
        </div>

        {/* Main contact panel */}

        <div className='contact-panel'>
          <div className='contact-panel-content'>
            <div className='availability'>
              <span className='availability-dot'></span>
              Available for opportunities
            </div>

            <h3>Have a project or opportunity in mind?</h3>

            <p>
              Whether it's a web application, enterprise system or industrial
              automation software, feel free to get in touch.
            </p>

            {/* Email */}

            <div className='email-action'>
              <div className='email-icon'>
                <FaEnvelope />
              </div>

              <div className='email-details'>
                <span>EMAIL</span>

                <strong>{email}</strong>
              </div>

              <button
                type='button'
                onClick={copyEmail}
                className='copy-email'
                aria-label='Copy email'
              >
                <FaCheck />
              </button>
            </div>

            {/* CTA */}

            <a href={`mailto:${email}`} className='contact-primary-button'>
              Start a conversation
              <FaArrowRight />
            </a>
          </div>

          {/* Right side */}

          <div className='contact-side'>
            <div className='contact-side-icon'>
              <FaEnvelope />
            </div>

            <span>Prefer social?</span>

            <p>You can also connect with me through GitHub or LinkedIn.</p>

            <div className='contact-socials'>
              <a
                href='https://github.com/jiivadev'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
              >
                <FaGithub />
              </a>

              <a
                href='https://www.linkedin.com/in/jeeva-muthu'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </a>
            </div>

            <div className='location-info'>
              <FaMapMarkerAlt />

              <span>India</span>
            </div>
          </div>
        </div>

        {/* Bottom line */}

        <div className='contact-bottom'>
          <span>
            Open to interesting engineering challenges and opportunities.
          </span>

          <span className='contact-status'>
            <i></i>
            Let's connect
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
