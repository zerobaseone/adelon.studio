import { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import TerminalWindow from '../components/TerminalWindow';

const mdxComponents = {
  TerminalWindow,
};

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const modules = import.meta.glob('../projects/*.mdx', { eager: true });

    const projectsData = Object.entries(modules).map(([path, module]) => {
      const filename = path.split('/').pop().replace('.mdx', '');

      return {
        slug: module.frontmatter?.slug || filename,
        title: module.frontmatter?.title || 'Untitled Project',
        status: module.frontmatter?.status || '',
        type: module.frontmatter?.type || '',
        tech: module.frontmatter?.tech || [],
        image: module.frontmatter?.image || null,
        links: module.frontmatter?.links || {},
        Component: module.default,
      };
    });

    setProjects(projectsData);
  }, []);

  return (
    <MDXProvider components={mdxComponents}>
      <main className="page-shell">
        <section className="stack">
          <div className="project-grid">
            {projects.map((project) => (
              <div key={project.slug} className="project-card">
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}

                <div className="project-title">{project.title}</div>

                <div className="project-tech">
                  {project.tech.length > 0 && project.tech.join(' • ')}
                </div>

                <div className="project-desc">
                  <project.Component />
                </div>

                {(project.links.github || project.links.demo) && (
                  <div className="project-links">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">GitHub →</a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">View Project →</a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </MDXProvider>
  );
}

export default Projects;
