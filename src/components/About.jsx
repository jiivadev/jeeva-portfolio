function About() {
  return (
    <section id='about' className='section about-section'>
      <div className='section-heading'>
        <span>ABOUT ME</span>
        <h2>Building systems that solve real problems.</h2>
      </div>

      <div className='about-container'>
        {/* LEFT */}
        <div className='about-content'>
          <p className='about-highlight'>
            I'm a Full Stack .NET Developer focused on building reliable,
            scalable and maintainable business applications.
          </p>

          <p>
            I work primarily with C#, ASP.NET MVC, ASP.NET Core, Web API and SQL
            Server. My experience includes developing enterprise applications,
            production planning systems, asset management solutions and
            industrial automation software.
          </p>

          <p>
            I enjoy understanding how a system works internally, from database
            design and backend architecture to frontend interactions and
            deployment.
          </p>

          <div className='about-tech-line'>
            <span>Backend</span>
            <span>Database</span>
            <span>Frontend</span>
            <span>Automation</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className='about-stats'>
          <div className='stat-card'>
            <strong>3+</strong>
            <span>Years Experience</span>
          </div>

          <div className='stat-card'>
            <strong>10+</strong>
            <span>Production Machines</span>
          </div>

          <div className='stat-card'>
            <strong>500+</strong>
            <span>Users Supported</span>
          </div>

          <div className='stat-card'>
            <strong>15+</strong>
            <span>Technologies Used</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
