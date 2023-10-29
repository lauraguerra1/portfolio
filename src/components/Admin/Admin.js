import { GoogleLogin } from '@react-oauth/google';
import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import './Admin.css'
import SingleProject from '../SingleProject/SingleProject';
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
    console.log({ title, description, link, gh, image, tech, instructions: loginInfo ? `${username},${password}` : null })
    setProject(freshProject)
  }
  const mainInputs = ['Title', 'Description', 'Tech', 'Link', 'Gh', 'Image'].map(input => {
    const updateInputValue = updateProject(input.toLowerCase());
    return (
      <div className='column-flex-default form-piece' key={input}>
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
      <>
        <form onSubmit={submitProject} className='w-80 column-flex-default'>
          <div className='display-grid'>
            {mainInputs}
          </div>
          <div className='instructions-options'>
            <p>Login Instructions Needed? </p> 
            <div className='toggler'>
              <button type='button' className={`${project.loginInfo ? 'selected-option' : 'unselected-option'} pointer yes`} onClick={() => {
                setProject(prev => ({...prev, loginInfo: !prev.loginInfo}))
              }}>Yes</button>

              <button  type='button' className={`${project.loginInfo ? 'unselected-option' : 'selected-option'} pointer no`}onClick={() => {
                setProject(prev => ({...prev, loginInfo: !prev.loginInfo}))
              }}>No</button>
            </div>
          </div>
          {
            project.loginInfo &&
            <div className='display-grid'>
                <div className='column-flex-default form-piece'>
                  <label htmlFor='username' className='align-self-start'>Username</label>  
                  <input type='text' id='username' name='username' value={project.username} onChange={(e) => updateProject(e.target.name)(e)} required/>
                </div>
                <div className='column-flex-default form-piece'>
                  <label htmlFor='password' className='align-self-start'>Password</label>  
                  <input type='text' id='password' name='password' value={project.password} onChange={(e) => updateProject(e.target.name)(e)} required/>
                </div>
            </div>
          }
          <button>Add Project</button>
        </form>
        <SingleProject
          title={project.title}
          tech={project.tech}
          projectDescription={project.description}
          src={project.image}
          link={project.link}
          gh={project.gh}
          instructions={project.loginInfo ? `${project.username},${project.password}` : null}
          index={0}
          // rightOrLeft={'left'}
        />
      </>
  )
}

export default Admin