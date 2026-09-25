import { useEffect, useState } from 'react';

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

function Hero() {
  const roles = [
    'Full Stack .NET Developer',
    'Software Engineer',
    'React Developer',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));

        if (displayText.length === currentRole.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1400);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));

        if (displayText.length === 0) {
          setIsDeleting(false);

          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id='home' className='hero'>
      <div className='hero-content'>
        <div className='hero-text'>
          <span className='hero-greeting'>Hello, I'm</span>

          <h1 className='hero-name'>
            Jeeva <span>M</span>
          </h1>

          {/* Typing Designation */}

          <h2 className='hero-designation'>
            <span className='typing-text'>{displayText}</span>

            <span className='typing-cursor'>|</span>
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
              href={`${import.meta.env.BASE_URL}JeevaM.pdf`}
              target='_blank'
              rel='noopener noreferrer'
              className='secondary-button'
            >
              Download Resume
            </a>
          </div>

          <div className='social-links'>
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

            <a href='mailto:jackjeevajiiva@gmail.com' aria-label='Email'>
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
