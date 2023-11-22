import './Contact.css'

import Linkbar from '../Linkbar/Linkbar'
import Link from '../Link/Link'

import lggLogo from '../../images/lgg-logo.png'
import schedule from '../../images/schedule-icon.png'

const Contact = ({mainLinks}) => {
  return (
    <section className='column-flex descriptive-section contact-section'>
      <h1 className='page-header'>CONTACT</h1>
      <div className='contact-details-container'>
        <img className='brand-logo' src={lggLogo} alt='Laura Garcia Guerra brand logo'/>
        <div className='contact-details'>
            <div className='meeting'>
              <p>Schedule a meeting here:</p>
              <Link src={schedule} location={'Laura Guerra\'s Schedule'} href={'https://calendly.com/laura-guerra-calendar/30min'}/>
            </div>
            <p>Email: l.garciaguerra1@gmail.com</p>
            <p>Phone: (310)770-6009</p>
        </div>
      </div>
      <Linkbar links={mainLinks}/>
    </section>
  )
}

export default Contact 