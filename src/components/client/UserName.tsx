'use client'

import { useContext} from "react";
import { AuthContext } from "~/useContext/authContext";
export default function UserName() {

const auth = useContext(AuthContext)




  return (
	<>
    <p>
      { auth?.user ? `Hello,` : null}
    </p>

	</>
  );
}