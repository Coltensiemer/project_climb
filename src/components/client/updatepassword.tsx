import React, { useState, useContext } from "react";
import Link from "next/link";
import Header from "~/components/client/Header";
import { Button } from "@/components/ui/button";
import { AuthContext } from "~/useContext/authContext";

interface formType { 
  password: string,
  confirmPassword: string,
}

export default function Updatepassword() {
  const auth = useContext(AuthContext);

  const [formData, setFormData] = useState<formType>({
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

	const {password, confirmPassword} = formData

	if (password !== confirmPassword) return console.log('passwords do not match')

	if (auth) {await auth.updatePassword(password)}

  } 

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="mb-6 text-2xl font-semibold">UpDate Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
         
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  });
                }}
                className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  });
                }}
                className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <Button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
            >
              Sign Up
            </Button>
          </form>
          <div className="mt-5">
            <p>Already have an account?</p>
            <Button variant={"outline"}>
              <Link href="./auth/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
} 


