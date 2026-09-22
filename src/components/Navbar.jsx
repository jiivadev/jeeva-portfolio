import { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /*
        Detect page scrolling
    */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*
        Detect which section is currently visible
    */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  /*
        Navigation items
    */
  const navItems = [
    {
      name: 'Home',
      id: 'home',
    },
    {
      name: 'About',
      id: 'about',
    },
    {
      name: 'Skills',
      id: 'skills',
    },
    {
      name: 'Experience',
      id: 'experience',
    },
    {
      name: 'Projects',
      id: 'projects',
    },
    {
      name: 'Contact',
      id: 'contact',
    },
  ];

  /*
        Close mobile menu
    */
  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar-new ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className='navbar-inner'>
        {/* Logo */}

        <a href='#home' className='navbar-logo' onClick={handleNavigation}>
          <span className='logo-name'>Jeeva</span>

          <span className='logo-dot'>M</span>
        </a>

        {/* Desktop Navigation */}

        <div className='navbar-links'>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right side */}

        <div className='navbar-actions'>
          {/* Resume */}

          <a
            href='/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='navbar-resume'
          >
            <FaDownload />

            <span>Resume</span>
          </a>

          {/* Mobile menu */}

          <button
            type='button'
            className='navbar-menu-button'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle navigation'
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
            onClick={handleNavigation}
          >
            {item.name}
          </a>
        ))}

        <a
          href='/resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='mobile-resume'
          onClick={handleNavigation}
        >
          <FaDownload />
          Download Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
