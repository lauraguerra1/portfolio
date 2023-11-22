import './Navbar.css'
import menuBtn from '../../images/menu.png'
import codeLogo from '../../images/CodeLogo.png'
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
          <NavLink to='/' className='heading-link'><img src={codeLogo} alt='Laura Garcia Guerra Logo, angle bracket code symbol withthe letters L G' /></NavLink>
          <div className='nav-buttons'>
            <NavLink className='nav-link' to='/'>HOME</NavLink>
            <NavLink className='nav-link' to='/about'>ABOUT</NavLink>
            <NavLink className='nav-link' to='/projects'>PROJECTS</NavLink>
            <NavLink className='nav-link' to='/contact'>CONTACT</NavLink>
          </div>
        </nav>
      }

    </div>
  );
}

export default Navbar