import { createContext, useContext, useReducer } from 'react';
import { authReducer, reduceAction } from '~/useReducers/authReducer';
import { createClient } from '@supabase/supabase-js';
import { User, Session } from '@supabase/supabase-js'

const AuthContext = createContext(null);

const INITAL_STATE = { 
	email: null,
	password: null
  }

export const AuthProvider = ({children}: any) => {

	const [state, dispatch] = useReducer(authReducer, INITAL_STATE)

	const signUp = (email: string, password: string) => { 
		dispatch({ 
			type: reduceAction.signUp,
			payload: { 
				email: email,
				password: password
			}

		})
	}


  return (
    <AuthContext.Provider value={null}>
      {children}
    </AuthContext.Provider>
  )
}