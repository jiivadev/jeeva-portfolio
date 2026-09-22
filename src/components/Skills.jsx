import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaReact,
  FaJs,
  FaHtml5,
  FaGitAlt,
  FaPaperPlane,
} from 'react-icons/fa';

const skillGroups = [
  {
    title: 'Backend Development',
    icon: <FaServer />,
    skills: [
      {
        name: 'C#',
        icon: <FaCode />,
        level: 'Advanced',
      },
      {
        name: 'ASP.NET Core',
        icon: <FaCode />,
        level: 'Advanced',
      },
      {
        name: 'ASP.NET MVC',
        icon: <FaCode />,
        level: 'Advanced',
      },
      {
        name: 'Web API',
        icon: <FaServer />,
        level: 'Advanced',
      },
    ],
  },

  {
    title: 'Frontend Development',
    icon: <FaReact />,
    skills: [
      {
        name: 'React',
        icon: <FaReact />,
        level: 'Intermediate',
      },
      {
        name: 'JavaScript',
        icon: <FaJs />,
        level: 'Advanced',
      },
      {
        name: 'jQuery',
        icon: <FaCode />,
        level: 'Advanced',
      },
      {
        name: 'HTML / CSS',
        icon: <FaHtml5 />,
        level: 'Advanced',
      },
    ],
  },

  {
    title: 'Database & ORM',
    icon: <FaDatabase />,
    skills: [
      {
        name: 'SQL Server',
        icon: <FaDatabase />,
        level: 'Advanced',
      },
      {
        name: 'Entity Framework',
        icon: <FaCode />,
        level: 'Advanced',
      },
      {
        name: 'Dapper',
        icon: <FaDatabase />,
        level: 'Advanced',
      },
      {
        name: 'Stored Procedures',
        icon: <FaDatabase />,
        level: 'Advanced',
      },
    ],
  },

  {
    title: 'Tools & Development',
    icon: <FaTools />,
    skills: [
      {
        name: 'Git',
        icon: <FaGitAlt />,
        level: 'Advanced',
      },
      {
        name: 'Visual Studio',
        icon: <FaCode />,
        level: 'Advanced',
      },
      {
        name: 'Postman',
        icon: <FaPaperPlane />,
        level: 'Advanced',
      },
      {
        name: 'IIS',
        icon: <FaServer />,
        level: 'Advanced',
      },
    ],
  },
];

function Skills() {
  return (
    <section id='skills' className='section skills-section'>
      <div className='section-heading'>
        <span>TECHNICAL STACK</span>

        <h2>
          Technologies I use to build
          <span> real-world systems.</span>
        </h2>
      </div>

      <div className='skills-groups'>
        {skillGroups.map((group) => (
          <div className='skill-group' key={group.title}>
            <div className='skill-group-header'>
              <div className='skill-group-icon'>{group.icon}</div>

              <h3>{group.title}</h3>
            </div>

            <div className='skill-items'>
              {group.skills.map((skill) => (
                <div className='skill-item' key={skill.name}>
                  <div className='skill-item-top'>
                    <div className='skill-icon'>{skill.icon}</div>

                    <span className='skill-name'>{skill.name}</span>
                  </div>

                  <span className='skill-level'>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
