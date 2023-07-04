import './App.css';
import Navbar from '../Navbar/Navbar'
import Linkbar from '../Linkbar/Linkbar'
import githubLogo from '../../images/github-icon.png'
import linkedInLogo from '../../images/linkedin-icon.png'
import emailLogo from '../../images/email-icon.png'
import cartoonLogo from '../../images/cartoon-brand-image.png'

const App = () => {
  const homePageLinks = [{logo: githubLogo, location: 'GitHub', href: 'https://github.com/lauraguerra1'}, {logo: linkedInLogo, location: 'LinkedIn', href: 'https://www.linkedin.com/in/laura-garcia-guerra-b9b431170/'}, {logo: emailLogo, location: 'Laura Guerra\'s email', href: 'mailto: l.garciaguerra1@gmail.com'}]
  return (
    <>
      <Navbar /> 
      <main>
        <img className='brand-logo' src={cartoonLogo} alt='Cartoon image of Laura Garcia Guerra, Software Engineer'/>
        <Linkbar links={homePageLinks}/>
      </main>
    </>
  );
}

export default App;
