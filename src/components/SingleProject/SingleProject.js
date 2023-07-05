import './SingleProject.css'

const SingleProject = ({src, title, tech}) => {
  const techStack = tech.map((item, i) => {
    return i === tech.length - 1
      ? item
      : `${item},`
  })
  return (
    <section className='single-project'>
      <div className='descriptive-section single-project-section'>
        <h2>{title.toUpperCase()}</h2>
        <p>Techologies:</p>
        <p>{techStack.join(' ')}</p>
      </div>
      <img src={src} alt={`Image of the ${title} project`}/>
    </section>
  )
}

export default SingleProject