import './Form.css'
import React, { useState } from 'react'

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: '', 
    email: '', 
    inquiry: 'Web Services', 
    message: ''
  })

  const handleChange = (elementName, elementValue) => {
    setFormValues(prev => ({...prev, [elementName]: elementValue}))
  }

  return (
    <form className='inquiry-form'>
    <div className='form-element'>
      <label htmlFor='name'>Name</label>
      <input className='form-input' id='name' name='name' type='text' value={formValues.name} onChange={(e) => handleChange(e.target.name, e.target.value)} required/>
    </div>
  </form>
  )
}

export default Form