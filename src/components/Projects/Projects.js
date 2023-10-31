import './Project.css'
import Project from '../SingleProject/SingleProject'

const Projects = ({projects, loading}) => {
  const projectEls = projects.map((project, i) => (<Project projectDescription={project.description} rightOrLeft={i % 2=== 0 ? 'right' : 'left'} key={i} src={project.image} title={project.title} tech={project.tech} link={project.link} gh={project.gh} index={i} instructions={project.instructions ? project.instructions : ''}/> ))
  
  return (
    <div className='main-project-page'>
    <h1>PROJECTS</h1>
    <section className='project-section'>
      {loading ? <p>Loading...</p> : projectEls}
      {/* {projectEls} */}
    </section>
    </div>
  )
}

export default Projects