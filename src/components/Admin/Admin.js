import { GoogleLogin } from '@react-oauth/google';
import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import './Admin.css'
import SingleProject from '../SingleProject/SingleProject';
import NewProjectForm from './NewProjectForm/NewProjectForm';
import {getAuthorizedUser, postProject, deleteProject} from '../../apiCalls.js';
import { useNavigate } from 'react-router-dom';
import Projects from '../Projects/Projects';
//create login function that sets user in app 

const Admin = ({updateError, projects, setProjects}) => {
  const navigate = useNavigate();

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
  const [postSuccess, setPostSuccess] = useState('')

  const updateProject = (inputName) => {
    return (event) => setProject(prev => ({ ...prev, [inputName]: event.target.value }))
  }

  const submitProject = async (e) => {
    e.preventDefault()
    const { title, description, link, gh, image, tech, loginInfo, username, password } = project
    try {
      const newProject = await postProject({ title, description, link, gh, image, tech, instructions: loginInfo ? `${username},${password}` : null })
      console.log('newprojec', newProject)
      setProjects(prev => [newProject.data, ...prev])
      setProject(freshProject)
      setPostSuccess(`${title} added successfully!`)
    } catch (error) {
      updateError(error)
    }
  }

  const removeProject = async (id) => {
    try {
      await deleteProject(id)
      setProjects(prev => prev.filter(proj => proj.id !== id))
    } catch (err) {
      updateError(err)
    }
  }

  const adjustLoginNeeded = () => setProject(prev => ({...prev, loginInfo: !prev.loginInfo}))

  useEffect(() => {
    return () => updateError(null)
  }, [])

  return (
    <>
    {
        !user.isAuthorized ? 
          <>
            <h1>ADMIN</h1>
            <p style={{textAlign: 'center'}}>This page is intended for portfolio administrator use only. Attempting to log in as a non-admin user will redirect you to the home page!</p>
            <GoogleLogin
              shape='pill'
              size='large'
              onSuccess={async credentialResponse => {
                try {
                  const user = await getAuthorizedUser(credentialResponse.credential)
                  
                  if (user.isAuthorized) {
                    setUser(user)
                  } else {
                    throw new Error('Login Failed. Please try again with different credentials.') 
                  }     
                } catch (error) {
                  navigate('/')
                }
                }
              }
              onError={() => {
                navigate('/')
              }}
            />
          </>
        :    
          <>
          <NewProjectForm updateProject={updateProject} project={project} submitProject={submitProject} adjustLoginNeeded={adjustLoginNeeded} setPostSuccess={setPostSuccess}/>
          <p className='post-success'>{postSuccess}</p>
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
            <Projects projects={projects} loading={false} deleteProject={removeProject} />
        </>
    }
    </>
  )
}

export default Admin