import './Linkbar.css'
import Link from '../Link/Link'

const Linkbar = ({links}) => {
  const linkEls = links.map((link, i) => (<Link key={i} src={link.logo} location={link.location}/>))
  return (
    <div className="linkbar">
      {linkEls}
    </div>
    
    )
}

export default Linkbar