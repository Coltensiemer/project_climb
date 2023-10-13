import { Import } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import Header from "~/components/Header";
import HeroLanding from "~/components/HeroLanding";
import EventList from "~/components/EventList";

export default function Home() {
  

  return (
    <>
    <Header /> 
    <HeroLanding />
      <div>
        <p className="bg-red-500">Hi</p>
        </div>
        <EventList /> 
    </>
  );
}






