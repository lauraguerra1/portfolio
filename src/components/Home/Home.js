import Linkbar from '../Linkbar/Linkbar'
import './Home.css'
import codeLogo from '../../images/CodeLogo.png'

const Home = ({smallScreen}) => { 
  return (
    <section className='column-flex home-section'>
      <img className='brand-logo' src={codeLogo} alt='Cartoon image of Laura Garcia Guerra, Software Engineer'/>
      <h2 id='homeName'>LAURA GARCIA GUERRA</h2>
      <h3 id='homeSE'>software engineer</h3>
      {!smallScreen && 
        <a target='_blank' href='https://docs.google.com/document/d/1mkalo0tUL6Rm7mHgiLRLoHhdU0yokyzmL0WXbkr_d1U/edit?usp=sharing'><button className="resume-button" id='homeResumeBtn'>view resume</button></a>
      }
    </section>
  )
}

export default Home