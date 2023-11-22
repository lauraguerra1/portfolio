import './Contact.css'
import Link from '../Link/Link'
import schedule from '../../images/schedule-icon.png'

const Contact = () => {
  return (
    <section className='column-flex descriptive-section contact-section'>
      <div className='contact-details-container'>
        <div className='contact-info'>
          <h1 style={{ textAlign: 'left' }}>CONTACT INFORMATION</h1>
          <p style={{ textAlign: 'left', fontSize: '18px'}}>Email: l.garciaguerra1@gmail.com</p>
          <p style={{ textAlign: 'left', fontSize: '18px' }}>Phone: 310-770-6009</p>
          <a className='contact-btn' href='https://www.linkedin.com/in/laura-garcia-guerra/' target='_blank'>Visit LinkedIn</a>
          <a className='contact-btn' href='https://github.com/lauraguerra1' target='_blank'>Visit GitHub</a>
        </div>
        <div className='contact-details'>
          <div className='meeting'>
            <p>Schedule a meeting here:</p>
            <Link src={schedule} location={'Laura Guerra\'s Schedule'} href={'https://calendly.com/laura-guerra-calendar/30min'}/>
          </div>
          <p>Email: l.garciaguerra1@gmail.com</p>
          <p>Phone: (310)770-6009</p>
        </div>
      </div>
    </section>
  )
}

export default Contact 