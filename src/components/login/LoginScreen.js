import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../Types/types';

export const LoginScreen = () => {
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogin = () => {
   
        const action = {
          type: types.login, 
          payload: { name: 'Marlon'  }
        }
        dispatch(action)



        navigate('/marvel', {
          replace: true
        });
    }
 
  return (
    <div>
        
      <h1>
          LoginScreen
      </h1>

      < hr />


      <button 
      className="btn btn-primary"
      onClick={handleLogin}
      >
        Login
      
      </button>
    
    </div>
  )
}
