import { createContext, useReducer } from "react";
import { authReducer, reducerAction } from "~/useReducers/authReducer";
import { User, Session } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

interface AuthContextType {
  signUp: (email: string, password: string) => Promise<void>;
  login:  (email: string, password: string) => Promise<void>;
  // Add other properties or functions as needed
}
const INITAL_STATE = {
  email: null,
  password: null,
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const router = useRouter();
  const supabase = createClientComponentClient();
const [state, dispatch] = useReducer(authReducer, INITAL_STATE);

  const signUp = async (email: string, password: string) => {
    try {
      //SET UP FOR LOCAL TEST. NEED TO CHEK CLIENT URL/Password
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: { 
          emailRedirectTo: `http://localhost:3000/auth/callback`
        }
      });
      console.log("email and password successful");
      router.refresh();

      if (error) {
        throw error;
      }

      // Dispatch the SIGN_UP action with the user data
    } catch (error) {
      console.log("Error with Sign Up", error);
    }
  };

  const login = async(email:string, password: string) =>  {
    try {
      const { data, error} = await supabase.auth.signInWithPassword({ 
        email: email,
        password: password
      })
      console.log("sign in successful")
      router.refresh
    } catch (error) {
      console.log('Error Signing In')
      
    }
  }

  return (
    <AuthContext.Provider value={{ ...state, signUp, login }}>
      {children}
    </AuthContext.Provider>
  );
};
