import './Project.css'
import Project from '../SingleProject/SingleProject'

import whatscookin from '../../images/whatscookin.png'
import overlook from '../../images/overlook.png'
import tictactoe from '../../images/tictactoe.png'
import rockpaperscissors from '../../images/rockpaperscissors.png'

const Projects = () => {
  const projects = [
    {title: 'Overlook', tech: ['JavaScript', 'HTML', 'CSS', 'Mocha/Chai'], img: overlook, link: 'https://lauraguerra1.github.io/overlook/', gh: 'https://github.com/lauraguerra1/overlook'},
    {title: 'What\'s Cookin', tech: ['JavaScript', 'HTML', 'CSS', 'Mocha/Chai'], img: whatscookin, link: 'https://lauraguerra1.github.io/whats-cookin/', gh: 'https://github.com/lauraguerra1/whats-cookin'},
    {title: 'Tic-Tac-Toe', tech: ['TypeScript', 'React'], img: tictactoe, link: 'https://tictactoe-react-ts-e79988b6b6bb.herokuapp.com/', gh: 'https://github.com/lauraguerra1/tic-tac-toe'},
    {title: 'Rock Paper Scissors', tech: ['JavaScript', 'HTML', 'CSS'], img: rockpaperscissors, link: 'https://lauraguerra1.github.io/rock-paper-scissors-project/', gh: 'https://github.com/lauraguerra1/rock-paper-scissors-project'}
  ]
  
  const projectEls = projects.map((project, i) => (<Project key={i} src={project.img} title={project.title} tech={project.tech} link={project.link} gh={project.gh} index={i}/> ))
  return (
    <div className='main-project-page'>
    <h1>PROJECTS</h1>
    <section className='project-section'>
      {projectEls}
    </section>
    </div>
  )
}

export default Projects