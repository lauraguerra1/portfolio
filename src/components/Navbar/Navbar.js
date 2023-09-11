import './Navbar.css'
import menuBtn from '../../images/menu.png'
import { NavLink } from 'react-router-dom';

const Navbar = ({smallScreen, clickMenu}) => {
  return (
    <div>
      {smallScreen ?
        <nav className='nav'>
          <button aria-expanded='false' className="menu-button" onClick={clickMenu}><img src={menuBtn} alt='menu button'/></button>
          <a target='_blank' href='https://docs.google.com/document/d/1mkalo0tUL6Rm7mHgiLRLoHhdU0yokyzmL0WXbkr_d1U/edit?usp=sharing'><button className="resume-button">view resume</button></a>
        </nav>
        : 
        <nav className='nav'>
          {/* <div className='nav-buttons'> */}
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/about-me'>About</NavLink>
            <NavLink className='nav-link' to='/projects'>Projects</NavLink>
            <NavLink className='nav-link' to='/contact'>Contact</NavLink>
          {/* </div> */}
          {/* <a target='_blank' href='https://docs.google.com/document/d/1mkalo0tUL6Rm7mHgiLRLoHhdU0yokyzmL0WXbkr_d1U/edit?usp=sharing'><button className="resume-button">view resume</button></a> */}
        </nav>
      }

    </div>
  );
}

export default Navbar