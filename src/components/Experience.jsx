import {
  FaBuilding,
  FaLaptopCode,
  FaIndustry,
  FaMicrochip,
  FaNetworkWired,
  FaCogs,
  FaProjectDiagram,
} from 'react-icons/fa';

function Experience() {
  return (
    <section id='experience' className='section experience-section'>
      <div className='section-heading'>
        <span>EXPERIENCE</span>

        <h2>
          Building software for
          <span> real-world systems.</span>
        </h2>
      </div>

      <div className='experience-timeline'>
        {/* Timeline line */}
        <div className='timeline-line'></div>

        {/* Experience */}
        <div className='experience-item'>
          <div className='timeline-dot'>
            <FaBuilding />
          </div>

          <div className='experience-card'>
            <div className='experience-header'>
              <div>
                <span className='experience-period'>2023 — Present</span>

                <h3>Full Stack .NET Developer</h3>

                <h4>Perennial Innovative Solutions</h4>
              </div>

              <div className='experience-badge'>3+ Years</div>
            </div>

            <p className='experience-summary'>
              Developing enterprise applications and machine-level automation
              software using C#, .NET and industrial communication technologies.
              My work spans both business software and production-floor
              automation systems.
            </p>

            {/* Areas */}
            <div className='experience-areas'>
              <div className='experience-area'>
                <div className='area-icon'>
                  <FaLaptopCode />
                </div>

                <div>
                  <h5>Enterprise Software</h5>

                  <p>
                    Building scalable web applications, APIs, production
                    planning systems, asset management and business management
                    solutions.
                  </p>
                </div>
              </div>

              <div className='experience-area'>
                <div className='area-icon'>
                  <FaIndustry />
                </div>

                <div>
                  <h5>Industrial Automation</h5>

                  <p>
                    Developing software that interacts directly with industrial
                    machines, production equipment and factory-floor systems.
                  </p>
                </div>
              </div>

              <div className='experience-area'>
                <div className='area-icon'>
                  <FaMicrochip />
                </div>

                <div>
                  <h5>Hardware & I/O Integration</h5>

                  <p>
                    Working with industrial I/O, sensors, controllers and
                    machine hardware to build reliable software-driven
                    operations.
                  </p>
                </div>
              </div>

              <div className='experience-area'>
                <div className='area-icon'>
                  <FaNetworkWired />
                </div>

                <div>
                  <h5>Machine Communication</h5>

                  <p>
                    Implementing communication between software and industrial
                    equipment using machine communication protocols and
                    network-based interfaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Automation expertise */}
            <div className='automation-expertise'>
              <div className='automation-title'>
                <FaCogs />
                <span>Automation Engineering Expertise</span>
              </div>

              <div className='automation-grid'>
                <span>Multithreaded Operations</span>

                <span>Parallel Processing</span>

                <span>Machine Communication</span>

                <span>Industrial I/O</span>

                <span>Motion Control</span>

                <span>Sensor Integration</span>

                <span>Closed-Loop Systems</span>

                <span>Production Automation</span>
              </div>
            </div>

            {/* Engineering mindset */}
            <div className='engineering-note'>
              <FaProjectDiagram />

              <p>
                Experienced in developing software where application logic,
                hardware communication and real-time machine operations need to
                work together reliably.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
