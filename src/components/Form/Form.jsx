import './Form.css'
import React, { useState } from 'react'

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: '', 
    email: '', 
    inquiry: 'Web Services', 
    message: ''
  })

  const formEls = Object.keys(formValues).map(el => {
    const isInquiry = el === 'inquiry'
    return (
    <div className='form-element' id={`${el}Container`}>
        <label htmlFor={el}>{`${isInquiry ? 'Reason For' : ''} ${el.charAt(0).toUpperCase() + el.slice(1)}`}</label>
        {
          isInquiry
            ?
            <select className='form-input' id={el} name={el} value={formValues[el]} onChange={(e) => handleChange(el, e.target.value)} required>
              <option value='Web Services'>Web Services</option>
              <option value='Networking'>Networking</option>
              <option value='Mentorship'>Mentorship</option>
              <option value='Other'>Other</option>
            </select>
            : el === 'message'
            ? <textarea className='form-input' id={el} name={el} value={formValues[el]} onChange={(e) => handleChange(el, e.target.value)} required/>
            : <input className='form-input' id={el} name={el} type='text' value={formValues[el]} onChange={(e) => handleChange(el, e.target.value)} required/>
        }
    </div>
    )
  })

  const handleChange = (elementName, elementValue) => {
    setFormValues(prev => ({...prev, [elementName]: elementValue}))
  }

  return (
  <form className='inquiry-form'>
    {formEls}
  </form>
  )
}

export default Form