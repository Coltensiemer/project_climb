"use client"

import { AppProps, type AppType } from "next/app";
import { useState } from "react";
import { SupabaseClient, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { AuthProvider } from "~/useContext/authContext";
import "~/styles/globals.css";
import Header from "~/components/client/Header";





export function LayoutProvider({
  children,
}: {
  children: React.ReactNode
}) {

  const [supabaseClient] = useState(() => createPagesBrowserClient())
  return (

      
      <SessionContextProvider
      supabaseClient={supabaseClient}
      // initialSession={pageProps.initialSession}
    >
      <AuthProvider>
        <Header /> 
   {children}
      </AuthProvider>
    </SessionContextProvider>
    
 
  )
}