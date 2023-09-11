import Linkbar from '../Linkbar/Linkbar'
import './Home.css'
import cartoonLogo from '../../images/cartoon-brand-image.png'

const Home = ({smallScreen, mainLinks}) => { 
  return (
    <section className='column-flex home-section'>
      <img className='brand-logo' src={cartoonLogo} alt='Cartoon image of Laura Garcia Guerra, Software Engineer'/>
      <Linkbar links={mainLinks} />
      {!smallScreen && 
        <a target='_blank' href='https://docs.google.com/document/d/1mkalo0tUL6Rm7mHgiLRLoHhdU0yokyzmL0WXbkr_d1U/edit?usp=sharing'><button className="resume-button" id='homeResumeBtn'>view resume</button></a>
      }
    </section>
  )
}

export default Home