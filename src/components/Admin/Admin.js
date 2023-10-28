import { GoogleLogin } from '@react-oauth/google';
import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import './Admin.css'
//import getAuthorizedUser from '../apiCalls.js';
//create login function that sets user in app 

const Admin = ({ updateError, logIn }) => {
  const freshProject = {
    title: '', 
    description: '',
    tech: '', 
    link: '', 
    gh: '', 
    image: '',
    loginInfo: false, 
    username: '', 
    password: ''
  }
  const [project, setProject] = useState(freshProject)

  useEffect(() => {
    console.log('loading admin page ')
  }, [])
 
  const updateProject = (inputName) => {
    return (event) => setProject(prev => ({ ...prev, [inputName]: event.target.value }))
  }

  const submitProject = (e) => {
    e.preventDefault()
    const {title, description, link, gh, image, tech, loginInfo, username, password} = project
    console.log({title, description, link, gh, image, tech, instructions: loginInfo? `${username},${password}` : null})
  }
  const mainInputs = ['Title', 'Description', 'Tech', 'Link', 'Gh', 'Image'].map(input => {
    const updateInputValue = updateProject(input.toLowerCase());
    return (
      <div className='column-flex' key={input}>
        <label htmlFor={input.toLowerCase()} className='align-self-start'>{input === 'Gh' ? 'GitHub': input}</label>  
        <input type='text' id={input.toLowerCase()} name={input.toLowerCase()} onChange={updateInputValue} value={project[input.toLowerCase()]} required/>
      </div>
    )
  })
    return (
        // <GoogleLogin
        //     shape='pill'
        //     size='large'
        // onSuccess={async credentialResponse => {
        //       console.log('jwt', credentialResponse.credential)
        //   console.log('user', jwtDecode(credentialResponse.credential).sub)
        //       // try {
        //       //   const user = await getAuthorizedUser({jwt: credentialResponse.credential})
                
        //       //   if (user.isAuthorized) {
        //       //     // logIn(user)
        //       //     console.log('user is authorized ')
        //       //   } else {
        //       //     throw new Error('Login Failed. Please try again with different credentials.')
        //       //   }
                  
        //       //   } catch (error) {
        //       //       updateError(new Error('Login Failed. Please try again with different credentials.'))
        //       //   }
        //     }}
        //     onError={() => {
        //         updateError(new Error('Login Failed. Please try again with different credentials.'))
        //     }}
      // />

      <form onSubmit={submitProject}>
        <div className='column-flex'>
          {/* <label>Title  <input type='text' name='title' /></label>
          <input type='text' name='title' />
          <input type='textarea' name='description' />
          <input type='text' name='tech' />
          <input type='text' name='link' />
          <input type='text' name='gh' />
          <input type='text' name='image' />
          <input type='text' name='image' /> */}
          {mainInputs}
        </div>
        <p>Login Instructions Needed? </p> 
        <div>
          <p className={`${project.loginInfo ? 'selected-option' : ''} pointer`} onClick={() => {
            setProject(prev => ({...prev, loginInfo: !prev.loginInfo}))
          }}>Yes</p>

          <p className={`${project.loginInfo ? '' : 'selected-option'} pointer`}onClick={() => {
            setProject(prev => ({...prev, loginInfo: !prev.loginInfo}))
          }}>No</p>
        </div>
        {
          project.loginInfo &&
          <div>
              <input type='text' name='username' value={project.username} onChange={(e) => updateProject(e.target.name)(e)} required/>
              <input type='text' name='password' value={project.password} onChange={(e) => updateProject(e.target.name)(e)} required/>

          </div>
        }
        <button>Add Project</button>
      </form>
  )
}

export default Admin