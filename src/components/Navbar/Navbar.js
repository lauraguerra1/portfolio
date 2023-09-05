import './Navbar.css'
import menuBtn from '../../images/menu.png'

const Navbar = ({clickMenu}) => {
  return (
    <nav className='nav'>
      <button aria-expanded='false' className="menu-button" onClick={clickMenu}><img src={menuBtn} alt='menu button'/></button>
      <a target='_blank' href='https://docs.google.com/document/d/1mkalo0tUL6Rm7mHgiLRLoHhdU0yokyzmL0WXbkr_d1U/edit?usp=sharing'><button className="resume-button">view resume</button></a>
    </nav>
  );
}

export default Navbar