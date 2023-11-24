import './Contact.css'
import Form from '../Form/Form'

const Contact = () => {
  return (
    <section className='column-flex descriptive-section contact-section'>
      <div className='contact-details-container'>
        <div className='contact-info'>
          <div>
            <h1 style={{margin: '10px 0px'}}>CONTACT<br/>INFORMATION</h1>
            <p style={{fontSize: '18px'}}>Email: l.garciaguerra1@gmail.com</p>
            <p style={{fontSize: '18px'}}>Phone: 310-770-6009</p>
          </div>
          <div>
            <a className='contact-btn' href='https://www.linkedin.com/in/laura-garcia-guerra/' target='_blank'>Visit LinkedIn</a>
            <a className='contact-btn' href='https://github.com/lauraguerra1' target='_blank'>Visit GitHub</a>
          </div>
        </div>
        <div className='contact-details'>
          <h2 style={{margin: '10px 0px'}}>GET IN TOUCH</h2>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact 