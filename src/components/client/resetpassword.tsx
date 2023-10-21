'use client'

import React, { useState, useContext } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuthContext } from "~/useContext/authContext";



export  function Resetpassword() {
  const auth = useContext(AuthContext);
  const [formData, setFormData] = useState({
  email: ""
  });

  const handleSubmit = async(e:any) => { 
    e.preventDefault()
	const {email} = formData
    try {
		if (auth) await auth.passwordReset(email)
    } catch (error) {
      console.log('Error Sending Password Reset', error)
    }
  }



  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="mb-6 text-2xl font-semibold">Send pasword reset</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
         
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
            Email
              </label>
			  <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
                className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <Button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
            >
              Send Password Reset
            </Button>
          </form>
          <div className="mt-5">
            <p>Already have an account?</p>
            <Button variant={"outline"}>
              <Link href="./login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
} 


