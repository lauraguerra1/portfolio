import Linkbar from '../Linkbar/Linkbar'
import './SingleProject.css'

import github from '../../images/github-icon.png'
import linkIcon from '../../images/link.png'
import { useState, useEffect } from 'react'
import Link from '../Link/Link'

const SingleProject = ({src, title, tech, link, gh, index}) => {
  const [pictureFirst, setPictureFirst] = useState(() => index % 2 === 0 || window.innerWidth < 900)
  const deployLink = {logo: linkIcon, location: `Laura Guerra\'s deployed ${title} project`, href: link}
  const repoLink = {logo: github, location: `Laura Guerra\'s ${title} project repository`, href: gh}
  
  const techStack = tech.map((item, i) => {
    return i === tech.length - 1
      ? item
      : `${item},`
  })

  const projectImg = <Link key={index + 'a'} src={src} location={deployLink.location} href={link}/>
  const description = 
  <div key={index + 'b'} className='descriptive-section single-project-section'>
    <h2>{title.toUpperCase()}</h2>
    <Linkbar links={[deployLink, repoLink]}/>
    <p>Techologies:</p>
    <p>{techStack.join(' ')}</p>
  </div>


useEffect(() => {
  const changePicDirection = () => {
    index % 2 === 0 || window.innerWidth < 900 ? setPictureFirst(true) : setPictureFirst(false) 
  }
  
  window.addEventListener('resize', changePicDirection)
  return () => window.removeEventListener('resize', changePicDirection)
  })

  
  return (
    <section className='single-project'>
      {pictureFirst ? [projectImg, description] : [description, projectImg]}
    </section>
  )
}

export default SingleProject