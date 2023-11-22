import Linkbar from '../Linkbar/Linkbar'
import './SingleProject.css'
// import lggLogo from '../../images/lgg-logo.png'
import github from '../../images/github-icon.png'
import linkIcon from '../../images/link.png'
import { useState, useEffect } from 'react'
import Link from '../Link/Link'

const SingleProject = ({deleteProject, projectDescription, src, title, tech, link, gh, instructions, index, id}) => {
  const [pictureFirst, setPictureFirst] = useState(() => index % 2 === 0 || window.innerWidth < 900)
  const deployLink = {logo: linkIcon, location: `Laura Guerra\'s deployed ${title} project`, href: link}
  const repoLink = {logo: github, location: `Laura Guerra\'s ${title} project repository`, href: gh}

  const projectImg = <Link key={index + 'a'} src={src ? src: 'https://i.imgur.com/f0GwD3h.png'} location={deployLink.location} href={link}/>
  const description = 
    <div key={index + 'b'} className='descriptive-section single-project-section'>
      <h2>{title.toUpperCase()}</h2>
      <p>{projectDescription}</p>
      <p>Techologies:</p>
      <p>{tech}</p>
      {instructions && <p>username: {instructions.split(',')[0]}</p>}
      {instructions && <p>password: {instructions.split(',')[1]}</p>}
      <Linkbar links={[deployLink, repoLink]}/>
    </div>

useEffect(() => {
  const changePicDirection = () => {
    index % 2 === 0 || window.innerWidth < 900 ? setPictureFirst(true) : setPictureFirst(false) 
  }
  
  window.addEventListener('resize', changePicDirection)
  return () => window.removeEventListener('resize', changePicDirection)
  })

  
  return (
    <section className={`single-project`}>
      {deleteProject && <button className='delete-btn material-symbols-outlined' onClick={() => deleteProject(id)}>delete</button>}
      {pictureFirst ? [projectImg, description] : [description, projectImg]}
    </section>
  )
}

export default SingleProject