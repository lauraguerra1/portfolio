import './App.css';
import {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Menu from '../Menu/Menu'
import Home from '../Home/Home'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import githubLogo from '../../images/github-icon.png'
import linkedInLogo from '../../images/linkedin-icon.png'
import emailLogo from '../../images/email-icon.png'
import { Route, Routes } from 'react-router';
import Admin from '../Admin/Admin';
import { gapi } from 'gapi-script';
import { getProjects } from '../../apiCalls';


const App = () => {
  const [error, setError] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [smallScreen, setSmallScreen] = useState(true)
  const [currentView, setCurrentView] = useState({ mainShown: true, page: 'Home' })
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  const mainLinks = [{logo: githubLogo, location: 'GitHub', href: 'https://github.com/lauraguerra1'}, {logo: linkedInLogo, location: 'LinkedIn', href: 'https://www.linkedin.com/in/laura-garcia-guerra-b9b431170/'}, {logo: emailLogo, location: 'Laura Guerra\'s email', href: 'mailto: l.garciaguerra1@gmail.com'}]
  const updateError = (error) => setError(error)
  
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


  const clientId ="985113285280-mp8adtalgf312bpei4iijfbgsdbda21h.apps.googleusercontent.com"
  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        client_id: clientId,
        scope: ""
      })
    }
    gapi.load('client:auth2', start)

    const loadData = async () => {
      setLoading(true)
      try {
        const projects = await getProjects()
        setProjects(await projects.data)
        setLoading(false)
       } catch (err) {
        setError(err)
        setLoading(false)
      }
    }

    loadData()
    return () => setError(null)
  },[])

  return (
    <div className='app'>
      {!menuOpen && <Navbar smallScreen={smallScreen} clickMenu={clickMenu} />}
      <main className={menuOpen ? 'row-flex plain-bg' : ''}>
        {error && <p>{error.message}</p>}
        {menuOpen && <Menu clickMenu={clickMenu} setCurrentView={setCurrentView}/>}
        {currentView.mainShown &&
          <Routes>
            <Route path='/' element={<Home smallScreen={smallScreen} mainLinks={mainLinks} />} />
            <Route path='/about-me' element={<About mainLinks={[mainLinks[1], mainLinks[2]]} />} />
            <Route path='/projects' element={<Projects projects={projects} loading={loading} />} />
            <Route path='/contact' element={<Contact mainLinks={mainLinks}/>} />
            <Route path='/admin' element={<Admin updateError={updateError} />} />
            {['', '/'].map(route => <Route path={route + '*'} element={<p>Nothing here</p>} />)}
          </Routes>
        }
      </main>
    </div>
  );
}

export default App;
