import './App.css';
import {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Menu from '../Menu/Menu'
import Home from '../Home/Home'
import About from '../About/About'


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [smallScreen, setSmallScreen] = useState(false)
  const [currentView, setCurrentView] = useState({mainShown: true, page: 'Home'})
  
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
        {currentView.mainShown && currentView.page === 'Home' && <Home />}
        {currentView.mainShown && currentView.page === 'About Me' && <About />}
      </main>
    </>
  );
}

export default App;
