import './Form.css'
import React, { useState } from 'react';
import { sendMail } from '../../apiCalls';

const Form = () => {
  const [mailStatus, setMailStatus] = useState(null)
  const [formValues, setFormValues] = useState({
    name: '', 
    email: '', 
    inquiry: 'Web Services', 
    message: ''
  })

  const resetForm = (status) => {
    setMailStatus(status)
    setFormValues({
      name: '',
      email: '',
      inquiry: 'Web Services',
      message: ''
    })
  }

  const submitForm = async (e) => {
    e.preventDefault();
    setMailStatus({ message: 'Sending, please wait...', style: { fontStyle: 'italic'}});
    try {
      await sendMail(formValues);
    } catch (error) {
      setMailStatus({ message: 'Whoops! Something went wrong. Please try again.', style: { color: '#d70f0f'}});
    }
    resetForm({ message: 'Sucess! Message sent.', style: { } })
  }

  const formEls = Object.keys(formValues).map(el => {
    const isInquiry = el === 'inquiry'
    return (
      <div key={el} className='form-element' id={`${el}Container`}>
        <label htmlFor={el}>{`${isInquiry ? 'Reason For' : ''} ${el.charAt(0).toUpperCase() + el.slice(1)}`}</label>
        {
          isInquiry
            ?
            <select className='form-input' id={el} name={el} value={formValues[el]} onFocus={() => setMailStatus(null)} onChange={(e) => handleChange(el, e.target.value)} required>
              <option value='Web Services'>Web Services</option>
              <option value='Networking'>Networking</option>
              <option value='Mentorship'>Mentorship</option>
              <option value='Other'>Other</option>
            </select>
            : el === 'message'
            ? <textarea className='form-input' id={el} name={el} value={formValues[el]} onFocus={() => setMailStatus(null)} onChange={(e) => handleChange(el, e.target.value)} required/>
            : <input className='form-input' id={el} name={el} type={el === 'email' ? 'email' : 'text'} value={formValues[el]} onFocus={() => setMailStatus(null)} onChange={(e) => handleChange(el, e.target.value)} required/>
        }
    </div>
    )
  })

  const handleChange = (elementName, elementValue) => {
    setFormValues(prev => ({...prev, [elementName]: elementValue}))
  }

  return (
    <form className='inquiry-form' onSubmit={submitForm}>
      {formEls}
      {!mailStatus
        ? <button className='contact-btn' style={{ gridColumn: 'span 2 / span 2', border: 'none', width: '200px', justifySelf: 'center' }}>Submit</button> 
        : <p className='feedback' style={mailStatus.style}>{mailStatus.message}</p>
      }
  </form>
  )
}

export default Form