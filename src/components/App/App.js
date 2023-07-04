import './App.css';
import Navbar from '../Navbar/Navbar'
import Linkbar from '../Linkbar/Linkbar'
import githubLogo from '../../images/github-icon.png'
import linkedInLogo from '../../images/linkedin-icon.png'
import emailLogo from '../../images/email-icon.png'
import cartoonLogo from '../../images/cartoon-brand-image.png'

const App = () => {
  return (
    <>
      <Navbar /> 
      <main>
        <img className='brand-logo' src={cartoonLogo} alt='Cartoon image of Laura Garcia Guerra, Software Engineer'/>
        <Linkbar links={[{logo: githubLogo, location: 'GitHub'}, {logo: linkedInLogo, location: 'LinkedIn'}, {logo: emailLogo, location: 'Laura Guerra\'s email'}]}/>
      </main>
    </>
  );
}

export default App;
