import { createContext, useReducer, useState, useEffect, ReactNode, FC} from "react";
import { authReducer} from "~/useReducers/authReducer";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { SignIn } from "@supabase/auth-ui-react";


type AuthProviderProps = {
  children: ReactNode;
};

interface AuthContextType {
  user: object | null; 
  signUp: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>
  updatePassword: (password: string) => Promise<void>;
  passwordReset: (email: string) => Promise<void>;
}
const INITAL_STATE = {
  email: null,
  password: null,
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC <AuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const supabaseClient = createClientComponentClient();

	const [user, setUser] = useState<{} | null>(null)



//SIGNUP
  const signUp = async (email: string, password: string) => {
    try {
      //SET UP FOR LOCAL TEST. NEED TO CHEK CLIENT URL/Password
      const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      alert("Please check your email to verify signup.");
      console.log(supabaseClient);
      router.push("/login");
      if (error) {
        throw error;
      }
      // Dispatch the SIGN_UP action with the user data
    } catch (error) {
      console.log("Error with Sign Up", error);
    }
  };


//LOGIN
  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
      });
      console.log("data", data)
      router.push('/')
      if (error) throw error;
    } catch (error) {
      console.log("Error Signing In", error);
    }
  };

  //SIGN OUT 
  const signOut =async () => {
    const {error} = await supabaseClient.auth.signOut()
    if (error) console.log('Error with signout', error)
    else console.log('Signout successful'), router.push("/auth/login")

  }

//RESET PASSWORD WITH EMAIL 
  const passwordReset = async (email: string) => {
    try {
      const { data, error } = await supabaseClient.auth.resetPasswordForEmail(email);
     
    } catch (error) {
      console.log("Unable to send password reset", error);
    }
  };


  //UPDATE PASSWORD 
  const updatePassword = async (password: string) => {
    try {
      const { data, error } = await supabaseClient.auth.updateUser({
        password: password,
      });
   await alert('Password was updated')
   router.push('./')
    } catch (error) {
      console.log("Unable to Update Password", error);
    }
  };


  // Get User's 
useEffect(() =>  {


  

	const getUser = async () => { 

		const {data: {user}} = await supabaseClient.auth.getUser()
		setUser(user)
		console.log(user)
	}
	getUser()
}, [signOut, SignIn])




  return (
    <AuthContext.Provider
      value={{ ...INITAL_STATE, signUp, login, updatePassword, passwordReset, signOut, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
