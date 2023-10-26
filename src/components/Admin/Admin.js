import { GoogleLogin } from '@react-oauth/google';
import React, { useEffect } from 'react'
//import getAuthorizedUser from '../apiCalls.js';
//create login function that sets user in app 

const Admin = ({ updateError, logIn }) => {
  useEffect(() => {
    console.log('loading admin page ')
  }, [])
    return (
        <GoogleLogin
            shape='pill'
            size='large'
        onSuccess={async credentialResponse => {
              console.log('jwt', credentialResponse.credential)
              // try {
              //   const user = await getAuthorizedUser({jwt: credentialResponse.credential})
                
              //   if (user.isAuthorized) {
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
  )
}

export default Admin