import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { AuthReducer } from './auth/AuthReducer'
import { AppRouter } from './components/routers/AppRouter'

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {logged: false}
}


export const HeroesApp = () => {

  const [user, dispatch] = useReducer(AuthReducer, {}, init); 

  useEffect(() => {
    if (!user ) return;

    localStorage.setItem('user', JSON.stringify(user))
  
  },)
  

  return (

    <AuthContext.Provider value={{
       user,
      dispatch
    }}>
        <AppRouter/>
    </AuthContext.Provider>
 
  )
}

