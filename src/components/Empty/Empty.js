import { Link } from "react-router-dom"
import './Empty.css'

const Empty = () => {
  return (
    <div className='column-flex'>
      <h2 style={{ marginTop: '10vh' }}>Whoops! Nothing to see here!</h2>
      <Link to='/' className='link'>Go To Home Page</Link>
    </div>
  )
}

export default Empty