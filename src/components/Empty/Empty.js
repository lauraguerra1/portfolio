import { Link } from "react-router-dom"
import './Empty.css'
import lggLogo from '../../images/lgg-logo.png'

const Empty = () => {
  return (
    <div className='column-flex empty-page'>
      <h2 style={{ marginTop: '10vh', textAlign: 'center'}}>Whoops! Nothing to see here!</h2>
      <img className='spin' src={lggLogo} alt='Spinning logo for Laura Garcia Guerra, Software Engineer'/>
      <Link to='/' className='empty-link'>Go To Home Page</Link>
    </div>
  )
}

export default Empty