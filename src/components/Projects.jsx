import {
  FaArrowRight,
  FaCode,
  FaIndustry,
  FaDatabase,
  FaServer,
  FaCogs,
  FaLayerGroup,
} from 'react-icons/fa';

const projects = [
  {
    title: 'Enterprise Resource Planning',
    category: 'ENTERPRISE APPLICATION',
    icon: <FaLayerGroup />,
    featured: true,

    description:
      'Enterprise business application developed to manage quotation, order processing, engineering activities, production planning and work-order operations.',

    technologies: [
      'C#',
      'ASP.NET Core',
      'ASP.NET MVC',
      'SQL Server',
      'jQuery',
      'Web API',
    ],

    highlights: [
      'Quotation & Order Management',
      'Engineering & Plan Creation',
      'Production Planning',
      'Work Order Management',
    ],
  },

  {
    title: 'Machine-Level Automation Software',
    category: 'INDUSTRIAL AUTOMATION',
    icon: <FaIndustry />,
    featured: true,

    description:
      'Industrial automation software developed to control and coordinate production-machine operations, connecting application logic with machine hardware and factory-floor systems.',

    technologies: [
      'C#',
      'TCP/IP',
      'Industrial I/O',
      'Multithreading',
      'Parallel Operations',
    ],

    highlights: [
      'Machine Communication',
      'Hardware & I/O Integration',
      'Parallel Machine Operations',
      'Production Process Control',
    ],
  },

  {
    title: 'Asset Management System',
    category: 'BUSINESS APPLICATION',
    icon: <FaDatabase />,

    description:
      'Web-based asset management solution designed to track assets, maintain asset information and provide operational reporting.',

    technologies: ['ASP.NET MVC', 'C#', 'SQL Server', 'JavaScript', 'jQuery'],

    highlights: [
      'Asset Tracking',
      'Asset Maintenance',
      'Data Management',
      'Reporting',
    ],
  },

  {
    title: 'Production Planning & Scheduling',
    category: 'PRODUCTION SYSTEM',
    icon: <FaCogs />,

    description:
      'Production planning functionality designed to manage production steps, machine allocation, capacity planning and work-order scheduling.',

    technologies: ['C#', '.NET', 'SQL Server', 'Web API', 'JavaScript'],

    highlights: [
      'Production Plan Management',
      'Machine Capacity Allocation',
      'Process Step Tracking',
      'Work Order Scheduling',
    ],
  },
];

function Projects() {
  return (
    <section id='projects' className='section projects-section'>
      <div className='section-heading'>
        <span>SELECTED WORK</span>

        <h2>
          Systems I've helped
          <span> build and develop.</span>
        </h2>

        <p className='projects-intro'>
          A combination of enterprise applications, production systems and
          industrial automation software developed for real-world environments.
        </p>
      </div>

      <div className='projects-grid'>
        {projects.map((project, index) => (
          <article
            className={`project-card-new ${
              project.featured ? 'project-featured' : ''
            }`}
            key={project.title}
          >
            {/* Top */}

            <div className='project-top'>
              <div className='project-icon'>{project.icon}</div>

              <span className='project-number'>
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Content */}

            <div className='project-content'>
              <span className='project-category'>{project.category}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              {/* Highlights */}

              <div className='project-highlights'>
                {project.highlights.map((highlight) => (
                  <span key={highlight}>
                    <FaArrowRight />
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies */}

            <div className='project-footer'>
              <div className='project-technologies'>
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom statement */}

      <div className='projects-bottom'>
        <div className='projects-bottom-icon'>
          <FaCode />
        </div>

        <div>
          <strong>Engineering beyond the interface.</strong>

          <p>
            From web applications and APIs to machine-level software and
            production systems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
