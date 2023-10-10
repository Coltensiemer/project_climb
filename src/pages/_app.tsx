
import { type AppType } from "next/app";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Session } from "@supabase/auth-helpers-nextjs";
import { AuthProvider } from "~/useContext/authContext";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
      <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>      
  );
};

export default MyApp;
