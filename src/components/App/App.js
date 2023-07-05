import './App.css';
import {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Menu from '../Menu/Menu'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'

import githubLogo from '../../images/github-icon.png'
import linkedInLogo from '../../images/linkedin-icon.png'
import emailLogo from '../../images/email-icon.png'


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [smallScreen, setSmallScreen] = useState(false)
  const [currentView, setCurrentView] = useState({mainShown: true, page: 'Home'})
  const mainLinks = [{logo: githubLogo, location: 'GitHub', href: 'https://github.com/lauraguerra1'}, {logo: linkedInLogo, location: 'LinkedIn', href: 'https://www.linkedin.com/in/laura-garcia-guerra-b9b431170/'}, {logo: emailLogo, location: 'Laura Guerra\'s email', href: 'mailto: l.garciaguerra1@gmail.com'}]

  const changeScreenSizeMode = () => {
    window.innerWidth < 625 
      ? setSmallScreen(true) 
      : setSmallScreen(false)
  }

  useEffect(() => {
    changeScreenSizeMode()
    window.addEventListener('resize', changeScreenSizeMode)
    return () => window.removeEventListener('resize', changeScreenSizeMode)
  }, [menuOpen])

  useEffect(() => {
    menuOpen && smallScreen 
      ? setCurrentView(prev => ({...prev, mainShown: false}))
      : setCurrentView(prev => ({...prev, mainShown: true}))
  }, [menuOpen, smallScreen])

  const clickMenu = () => {
    setMenuOpen(prevState => !prevState)
  }

  return (
    <>
      {!menuOpen && <Navbar clickMenu={clickMenu} />}
      <main className={menuOpen ? 'row-flex' : ''}>
        {menuOpen && <Menu clickMenu={clickMenu} currentView={currentView} setCurrentView={setCurrentView}/>}
        {currentView.mainShown && currentView.page === 'Home' && <Home mainLinks={mainLinks}/>}
        {currentView.mainShown && currentView.page === 'About Me' && <About />}
        {currentView.mainShown && currentView.page === 'Contact' && <Contact mainLinks={mainLinks}/>}
      </main>
    </>
  );
}

export default App;
