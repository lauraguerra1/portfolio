import React, { useEffect, useState } from 'react';
import './Contact.css';
import { useSearchParams } from 'react-router-dom';
import Form from '../Form/Form';
import { InlineWidget } from 'react-calendly';
import Toggler from '../Toggler/Toggler';

const Contact = () => {
  const [searchParams, setSearchParams] = useSearchParams({ viewingCalendar: false });
  const [viewingCalendar, setViewingCalendar] = useState(searchParams.get('viewingCalendar') === 'true');

  const toggle = () => {
    setViewingCalendar(prev => !prev)
  };

  useEffect(() => {
    setSearchParams({ viewingCalendar });
  }, [viewingCalendar])

  return (
    <section className='column-flex descriptive-section contact-section'>
      <div className='contact-details-container'>
        <div className='contact-info'>
          <div>
            <h1 style={{ margin: '10px 0px' }}>CONTACT<br/>INFORMATION</h1>
            <p style={{ fontSize: '18px' }}>Email: l.garciaguerra1@gmail.com</p>
            <p style={{ fontSize: '18px' }}>Phone: 310-770-6009</p>
          </div>
          <div>
            <a className='contact-btn' href='https://www.linkedin.com/in/laura-garcia-guerra/' target='_blank' rel='noopener noreferrer'>Visit LinkedIn</a>
            <a className='contact-btn' href='https://github.com/lauraguerra1' target='_blank' rel='noopener noreferrer'>Visit GitHub</a>
          </div>
        </div>
        <div className='contact-details'>
          <Toggler
            option1='GET IN TOUCH'
            option2='BOOK A MEETING'
            onClick={toggle}
            value={viewingCalendar}
            style={{ marginTop: '20px' }}
          />
          <div className={viewingCalendar ? 'hidden' : ''} >
            <Form />
          </div>
          <div className={viewingCalendar ? 'inquiry-form' : 'hidden'} id='widgetContainer'>
            <InlineWidget url='https://calendly.com/laura-guerra-calendar/30min' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
