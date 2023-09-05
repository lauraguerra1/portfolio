import './Menu.css'
import closeBtn from '../../images/close.png'

const Menu = ({clickMenu, currentView, setCurrentView}) => {
  const changeView = (view) => {
    clickMenu()
    setCurrentView(prevView => ({...prevView, page: view}))
  }

  const availableViews = ['Home', 'About Me', 'Projects', 'Contact'].filter(view => view !== currentView.page)
  const menuButtons = availableViews.map((view, i) => (<button key={i} className='menu-button page-button' onClick={() => changeView(view)}>{view}</button>))

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