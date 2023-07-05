import './Menu.css'

const Menu = ({clickMenu, currentView, setCurrentView}) => {
  const changeView = (view) => {
    clickMenu()
    setCurrentView(prevView => ({...prevView, page: view}))
  }

  const availableViews = ['Home', 'About Me', 'Projects', 'Contact'].filter(view => view !== currentView.page)
  const menuButtons = availableViews.map((view, i) => (<button key={i} className='menu-button page-button' onClick={() => changeView(view)}>{view}</button>))

  return (
    <aside className='menu'>
      <button aria-expanded='true' className="menu-button close-button material-symbols-outlined" onClick={clickMenu}>close</button>
      <div className='menu-buttons'>
        {menuButtons}
        <a target='_blank' href='https://docs.google.com/document/d/1dBflBmkAOu7wCbJQrIY7XsgG6asjzAwJwWdqy5mzQnk/edit?usp=sharing'><button className="resume-button">view resume</button></a>
      </div>
    </aside>
  )
}

export default Menu