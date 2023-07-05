import Linkbar from '../Linkbar/Linkbar'
import './Home.css'
import cartoonLogo from '../../images/cartoon-brand-image.png'

const Home = ({mainLinks}) => { 
  return (
    <section className='column-flex home-section'>
      <img className='brand-logo' src={cartoonLogo} alt='Cartoon image of Laura Garcia Guerra, Software Engineer'/>
      <Linkbar links={mainLinks}/>
    </section>
  )
}

export default Home