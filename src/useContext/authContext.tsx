import { createContext, useContext, useReducer } from 'react';
import { authReducer, reducerAction } from '~/useReducers/authReducer';
import { createClient } from '@supabase/supabase-js';
import { User, Session } from '@supabase/supabase-js'
import {supabaseLocal} from "supabaseClient"

const AuthContext = createContext({});

const INITAL_STATE = { 
	email: null,
	password: null
  }
//@ts-ignore
export const AuthProvider = ({children}:any) => {

	const [state, dispatch] = useReducer(authReducer, INITAL_STATE)

	const signUp = async (email: string, password: string) => {
		try {
			//SET UP FOR LOCAL TEST. NEED TO CHEK CLIENT URL/Password
		  const { data, error } = await supabaseLocal.auth.signUp({
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
    <AuthContext.Provider value={{state, signUp}}>
      {children}
    </AuthContext.Provider>
  )
}