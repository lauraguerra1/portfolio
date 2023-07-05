import Linkbar from '../Linkbar/Linkbar'
import './SingleProject.css'

import github from '../../images/github-icon.png'
import linkIcon from '../../images/link-icon.png'

const SingleProject = ({src, title, tech, link, gh}) => {
  const deployLink = {logo: linkIcon, location: `Laura Guerra\'s deployed ${title} project`, href: link}
  const repoLink = {logo: github, location: `Laura Guerra\'s ${title} project repository`, href: gh}
  
  const techStack = tech.map((item, i) => {
    return i === tech.length - 1
      ? item
      : `${item},`
  })
  return (
    <section className='single-project'>
      <img className='project-img' src={src} alt={`Image of the ${title} project`}/>
      <div className='descriptive-section single-project-section'>
        <h2>{title.toUpperCase()}</h2>
        <Linkbar links={[deployLink, repoLink]}/>
        <p>Techologies:</p>
        <p>{techStack.join(' ')}</p>
      </div>
    </section>
  )
}

export default SingleProject