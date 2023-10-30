import { GoogleLogin } from '@react-oauth/google';
import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import './Admin.css'
import SingleProject from '../SingleProject/SingleProject';
import NewProjectForm from './NewProjectForm/NewProjectForm';
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
  const [user, setUser] = useState({ isAuthorized: false })

  const updateProject = (inputName) => {
    return (event) => setProject(prev => ({ ...prev, [inputName]: event.target.value }))
  }

  const submitProject = (e) => {
    e.preventDefault()
    const {title, description, link, gh, image, tech, loginInfo, username, password} = project
    console.log({ title, description, link, gh, image, tech, instructions: loginInfo ? `${username},${password}` : null })
    setProject(freshProject)
  }

  const adjustLoginNeeded = () => setProject(prev => ({...prev, loginInfo: !prev.loginInfo}))

  useEffect(() => {
    //try and see if there is a user either in localstorage or in cookies 
  }, [])

  return (
    <>
    {
      !user.isAuthorized ? 
        <GoogleLogin
          shape='pill'
          size='large'
          onSuccess={async credentialResponse => {
            console.log('jwt', credentialResponse.credential)
            console.log('user', jwtDecode(credentialResponse.credential).sub)
            // try {
              //   const user = await getAuthorizedUser({jwt: credentialResponse.credential})
              
            //   if (user.isAuthorized) {
            //       setUser(user)
                //     // logIn(user)
                //     console.log('user is authorized ')
                //   } else {
                  //     throw new Error('Login Failed. Please try again with different credentials.')
                  //   }
                  
                  //   } catch (error) {
                    //       updateError(new Error('Login Failed. Please try again with different credentials.'))
                    //   }
                  }}
                  onError={() => {
                    updateError(new Error('Login Failed. Please try again with different credentials.'))
                  }}
              />
            : 
              
            <>
            <NewProjectForm updateProject={updateProject} project={project} submitProject={submitProject} adjustLoginNeeded={adjustLoginNeeded} />
    <SingleProject
      title={project.title}
      tech={project.tech}
      projectDescription={project.description}
      src={project.image}
      link={project.link}
      gh={project.gh}
      instructions={project.loginInfo ? `${project.username},${project.password}` : null}
      index={0}
    />
    </>
  }
  </>
    )
}

export default Admin