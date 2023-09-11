import './Project.css'
import Project from '../SingleProject/SingleProject'

import stylestash from '../../images/styleStash.png'
import pawfect from '../../images/pawfect-match.png'
import makeup360 from '../../images/makeup360.png'
import rancid from '../../images/rancid.png'
import whatscookin from '../../images/whatscookin.png'
import overlook from '../../images/overlook.png'
import tictactoe from '../../images/tictactoe.png'
import rockpaperscissors from '../../images/rockpaperscissors.png'
import projectPlanner from '../../images/projectplanner.png'

const Projects = () => {
  const projects = [
    {title: 'Project Planner', tech: ['React, TypeScript', 'Open AI'], img:projectPlanner, link: 'https://project-planner-ui.vercel.app/', gh:'https://github.com/lauraguerra1/project-planner-ui', description: 'An AI generator and organizational tool for developers to curate project plans.'},
    {title: 'Style Stash', tech: ['Express.js', 'React', 'HTML', 'CSS', 'Router'], img:stylestash, link: 'https://style-stash.vercel.app/', gh: 'https://github.com/lauraguerra1/style-stash', description: 'A virtual closet for tracking clothing items and planning outfits.'},
    {title: 'Pawfect Match', tech: ['React', 'TypeScript', 'HTML', 'CSS', 'Router', 'Cypress'], img: pawfect, link:'https://pawfect-match-laura.vercel.app/', gh:'https://github.com/lauraguerra1/pawfect-match', description: 'An online guide to discovering the ideal pet companion based on your unique personality traits.'},
    {title: 'Makeup 360', tech: ['React', 'TypeScript', 'HTML', 'CSS', 'Router', 'Cypress'], img:makeup360, link: 'https://makeup-360.vercel.app/', gh: 'https://github.com/lauraguerra1/makeup-360', description: 'A one-stop destination designed for exploring and shopping for the perfect cosmetics collection.'},
    {title: 'Rancid Tomatillos', tech: ['React', 'HTML', 'CSS', 'Router', 'Cypress'], img:rancid, link: 'https://rancid-tomatillos-laura.vercel.app/', gh: 'https://github.com/lauraguerra1/rancid-tomatillos', description: 'Explore, filter, and preview movies with ease.'},
    {title: 'Overlook', tech: ['JavaScript', 'HTML', 'CSS', 'Mocha/Chai'], img: overlook, link: 'https://lauraguerra1.github.io/overlook/', gh: 'https://github.com/lauraguerra1/overlook', instructions: 'username: customer50,password: overlook2021', description: 'A hotel booking website.'},
    {title: 'What\'s Cookin', tech: ['JavaScript', 'HTML', 'CSS', 'Mocha/Chai'], img: whatscookin, link: 'https://lauraguerra1.github.io/whats-cookin/', gh: 'https://github.com/lauraguerra1/whats-cookin', description: 'The ultimate culinary companion for discovering and searching recipes.'},
    {title: 'Tic-Tac-Toe', tech: ['TypeScript', 'React'], img: tictactoe, link: 'https://laura-tic-tac-toe.vercel.app/', gh: 'https://github.com/lauraguerra1/tic-tac-toe', description: 'A fun and simple game of tic tac toe with cuddly characters.'},
    {title: 'Rock Paper Scissors', tech: ['JavaScript', 'HTML', 'CSS'], img: rockpaperscissors, link: 'https://lauraguerra1.github.io/rock-paper-scissors-project/', gh: 'https://github.com/lauraguerra1/rock-paper-scissors-project', description: 'Play against the computer in a classic game of Rock, Paper, Scissors!'}
  ]
  
  const projectEls = projects.map((project, i) => (<Project projectDescription={project.description} rightOrLeft={i % 2=== 0 ? 'right' : 'left'} key={i} src={project.img} title={project.title} tech={project.tech} link={project.link} gh={project.gh} index={i} instructions={project.instructions ? project.instructions : ''}/> ))
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