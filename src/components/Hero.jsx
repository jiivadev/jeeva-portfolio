import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

import profileImage from '../assets/profile.jpg';

function Hero() {
  return (
    <section id='home' className='hero'>
      <div className='hero-content'>
        <div className='hero-text'>
          <span className='hero-greeting'>Hello, I'm</span>

          <h1>
            Jeeva <span>M</span>
          </h1>

          <h2>
            Full Stack <span>.NET</span> Developer
          </h2>

          <p className='hero-description'>
            I build scalable web applications using C#, ASP.NET Core, SQL Server
            and React, with a focus on clean architecture and reliable
            solutions.
          </p>

          <div className='hero-buttons'>
            <a href='#projects' className='primary-button'>
              View Projects
              <FaArrowDown />
            </a>

            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='secondary-button'
            >
              Download Resume
            </a>
          </div>

          <div className='social-links'>
            <a
              href='YOUR_GITHUB_URL'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <FaGithub />
            </a>

            <a
              href='YOUR_LINKEDIN_URL'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>

            <a href='mailto:YOUR_EMAIL' aria-label='Email'>
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className='hero-image-container'>
          <div className='image-glow'></div>

          <div className='image-border'>
            <div className='image-wrapper'>
              <img src={profileImage} alt='Jeeva M' />
            </div>
          </div>

          <div className='floating-badge'>
            <span></span>
            Available for opportunities
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
