import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { AuthProvider } from "~/useContext/authContext";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (

      <Component {...pageProps} />


  );
};

export default api.withTRPC(MyApp);
