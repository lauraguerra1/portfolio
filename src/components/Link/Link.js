import './Link.css'

const Link = ({src, location}) => {
  return (
      <img className='link' role='button' src={src} alt={`link to ${location}`} />
    )
}

export default Link