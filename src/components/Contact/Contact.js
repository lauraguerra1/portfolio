import React from 'react';
import './Contact.css';
import '../Form/Form.css';
import { InlineWidget } from 'react-calendly';

const Contact = () => {

  return (
    <section className='column-flex descriptive-section contact-section'>
      <div className='contact-details-container'>
        <div className='contact-info'>
          <div>
            <h1 style={{ margin: '10px 0px' }}>
              CONTACT
              <br />
              INFORMATION
            </h1>
            
          </div>
          <div>
            <a className='contact-btn' href='https://www.linkedin.com/in/laura-garcia-guerra/' target='_blank' rel='noopener noreferrer'>
              Visit LinkedIn
            </a>
            <a className='contact-btn' href='https://github.com/lauraguerra1' target='_blank' rel='noopener noreferrer'>
              Visit GitHub
            </a>
          </div>
        </div>
        <div className='contact-details'>
          <h1 style={{ marginTop: `10px` }}>
            BOOK A MEETING
          </h1>

          <div className="inquiry-form" id='widgetContainer'>
            <InlineWidget url='https://calendly.com/laura-guerra-calendar/30min' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
