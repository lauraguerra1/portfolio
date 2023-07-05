import './SingleProject.css'

const SingleProject = ({src, title, tech}) => {
  const techStack = tech.map((item, i) => {
    return i === tech.length - 1
      ? item
      : `${item},`
  })
  return (
    <section className='single-project'>
      <div className='descriptive-section'>
        <h2>{title}</h2>
        <h3>Tech Stack:</h3>
        <p>{techStack.join(' ')}</p>
      </div>
      <img src={src} alt={`Image of the ${title} project`}/>
    </section>
  )
}

export default SingleProject