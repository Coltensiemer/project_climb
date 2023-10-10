import { createContext, useReducer } from 'react';
import { authReducer, reducerAction } from '~/useReducers/authReducer';
import { User, Session } from '@supabase/supabase-js'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export const AuthContext = createContext({});

export const AuthProvider = ({children}:any) => {
	const router = useRouter()

const supabase = createClientComponentClient()

const INITAL_STATE = {
	email: null,
	password: null
  }

const [state, dispatch] = useReducer(authReducer, INITAL_STATE)

const signUp = async (email: string, password: string) => {
		try {
			//SET UP FOR LOCAL TEST. NEED TO CHEK CLIENT URL/Password
		  const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: { 
				emailRedirectTo: `${location.origin}/auth/callback`
			}
		  });
		  router.refresh()	

		  if (error) {
			throw error;
		  }
	
		  // Dispatch the SIGN_UP action with the user data
		} catch (error) {
		  console.log("Error with Sign Up", error)
		
		}
	  };


  return (
    <AuthContext.Provider value={{...state, signUp}}>
      {children}
    </AuthContext.Provider>
  )
}