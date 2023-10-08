import { createContext, useContext, useReducer } from 'react';
import { authReducer, reducerAction } from '~/useReducers/authReducer';
import { createClient } from '@supabase/supabase-js';
import { User, Session } from '@supabase/supabase-js'
import {supabase} from "supabaseClient"

const AuthContext = createContext(null);

const INITAL_STATE = { 
	email: null,
	password: null
  }

export const AuthProvider = ({children}: any) => {

	const [state, dispatch] = useReducer(authReducer, INITAL_STATE)

	const signUp = async (email: string, password: string) => {
		try {
		  // Implement the Supabase sign-up logic here
		  // Replace with your actual Supabase authentication code
		  const { data, error } = await supabase.auth.signUp({
			email,
			password,
		  });
	
		  if (error) {
			throw error;
		  }
	
		  // Dispatch the SIGN_UP action with the user data
		  dispatch({ type: reducerAction.signUp, payload: { data } });
		} catch (error) {
		  console.log("Error with Sign Up", error)
		
		}
	  };


  return (
    <AuthContext.Provider value={null}>
      {children}
    </AuthContext.Provider>
  )
}