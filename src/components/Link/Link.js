import './Link.css'

const Link = ({src, location, href}) => {
  return (
    <a aria-label={`Link to ${location}`} className='link' href={href} target="_blank"><img src={src} alt={`link to ${location}`} /></a>  
    )
}

export default Link