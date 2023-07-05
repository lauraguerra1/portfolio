import Project from '../SingleProject/SingleProject'

const Projects = () => {
  const projects = [{title: 'Lavish Living Hotel', tech: ['JavaScript', 'HTML', 'CSS'], img:'https://placekitten.com/200/300'}]
  const projectEls = projects.map((project, i) => (<Project key={i} src={project.img} title={project.title} tech={project.tech}/> ))
  return (
    <section className='column-flex project-section'>
      <h1>PROJECTS</h1>
      {projectEls}
    </section>
  )
}

export default Projects