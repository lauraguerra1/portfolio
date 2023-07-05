import './Project.css'
import Project from '../SingleProject/SingleProject'

const Projects = () => {
  const projects = [
    {title: 'Overlook', tech: ['JavaScript', 'HTML', 'CSS'], img:'https://placekitten.com/300/200', link: 'https://lauraguerra1.github.io/overlook/', gh: 'https://github.com/lauraguerra1/overlook'},
    {title: 'Overlook', tech: ['JavaScript', 'HTML', 'CSS'], img:'https://placekitten.com/300/200', link: 'https://lauraguerra1.github.io/overlook/', gh: 'https://github.com/lauraguerra1/overlook'},
    {title: 'Overlook', tech: ['JavaScript', 'HTML', 'CSS'], img:'https://placekitten.com/300/200', link: 'https://lauraguerra1.github.io/overlook/', gh: 'https://github.com/lauraguerra1/overlook'},
    {title: 'Overlook', tech: ['JavaScript', 'HTML', 'CSS'], img:'https://placekitten.com/300/200', link: 'https://lauraguerra1.github.io/overlook/', gh: 'https://github.com/lauraguerra1/overlook'}
  ]
  
  const projectEls = projects.map((project, i) => (<Project key={i} src={project.img} title={project.title} tech={project.tech} link={project.link} gh={project.gh} index={i}/> ))
  return (
    <>
    <h1>PROJECTS</h1>
    <section className='project-section'>
      {projectEls}
    </section>
    </>
  )
}

export default Projects