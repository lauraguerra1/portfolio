import { GoogleLogin } from '@react-oauth/google';
import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import './Admin.css'
//import getAuthorizedUser from '../apiCalls.js';
//create login function that sets user in app 

const Admin = ({ updateError, logIn }) => {
  const [project, setProject] = useState({
    title: '', 
    description: '',
    tech: '', 
    link: '', 
    gh: '', 
    image: '',
    loginInfo: false, 
    username: '', 
    password: ''
  })

  useEffect(() => {
    console.log('loading admin page ')
  }, [])
  const mainInputs = ['title', 'description', 'tech', 'link', 'gh', 'image']
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

      <form>
        <div className='column-flex'>
          <label>Title  <input type='text' name='title' /></label>
          <input type='text' name='title' />
          <input type='textarea' name='description' />
          <input type='text' name='tech' />
          <input type='text' name='link' />
          <input type='text' name='gh' />
          <input type='text' name='image' />
          <input type='text' name='image' />
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
            <input type='text' name='username' />
            <input type='text' name='password'/>

          </div>
        }
      </form>
  )
}

export default Admin