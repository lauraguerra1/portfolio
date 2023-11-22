import './Menu.css'
import closeBtn from '../../images/close.png'
import {Link} from 'react-router-dom'

const Menu = ({clickMenu, setCurrentView}) => {
  const changeView = (view) => {
    clickMenu()
    setCurrentView(prevView => ({...prevView, page: view}))
  }

  const menuButtons = [{ name: 'HOME', path: '/' }, { name: 'ABOUT', path: '/about' }, { name: 'PROJECTS', path: '/projects' }, { name: 'CONTACT', path: '/contact' }].map((view, i) => {
    return (<Link key={view.name} to={view.path}><button key={i} className='menu-button page-button' onClick={() => changeView(view.name)}>{view.name}</button></Link>)
  })

  return (
    <aside className='menu'>
      <button aria-expanded='true' className="menu-button close-button" onClick={clickMenu}><img src={closeBtn} alt='close menu button' /></button>
      <div className='menu-buttons'>
        {menuButtons}
        <a target='_blank' href='https://docs.google.com/document/d/1mkalo0tUL6Rm7mHgiLRLoHhdU0yokyzmL0WXbkr_d1U/edit?usp=sharing'><button className="resume-button">view resume</button></a>
      </div>
    </aside>
  )
}

export default Menu