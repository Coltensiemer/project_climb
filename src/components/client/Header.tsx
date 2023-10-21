"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "~/useContext/authContext";
import UserName from "./UserName";

const Header = () => {
  const auth = useContext(AuthContext);

  const router = useRouter()

  const handeSignOut = async () => {
    if (auth) await auth.signOut(),
    router.push('/');
    else {
      console.log("No auth for signout");
    }
  };



  return (
    <header className="flex flex-row justify-between p-2 px-10">
      <p className="font-bold">LOGO</p>
      <UserName />
      {auth?.user ? (
        <Button onClick={handeSignOut}>Signout</Button>
      ) : (
        <Button onClick={() => router.push('/auth/login')}>
      Login
        </Button>
      )}
      <nav className="flex flex-row">
        <ul className="flex flex-row">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
