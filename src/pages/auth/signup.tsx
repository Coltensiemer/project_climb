import React, { useState, useContext } from "react";
import Link from "next/link";
import Header from "~/components/Header";
import { Button } from "@/components/ui/button";
import { AuthContext } from "~/useContext/authContext";

interface formType  { 
  email: string,
  password: string,
  confirmPassword: string,
}

export default function SignUp() {
  const auth = useContext(AuthContext);

  const [formData, setFormData] = useState<formType>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e:any) => {
    e.preventDefault()

    const { email, password, confirmPassword } = formData;
    if (password != confirmPassword)
      return console.log("Password does not match");
    if (auth) {  await auth.signUp(email, password)};
  } 
  return (
    <>
      <Header />
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="mb-6 text-2xl font-semibold">Sign Up</h1>
          <form onSubmit={handleSubmit}>
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
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button>
                <Link href="/auth/resetpassword">Reset Password</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
} 




  /* <div className="mb-4">
<label
  htmlFor="username"
  className="block text-sm font-medium text-gray-700"
>
  Username
</label>
<input
  type="text"
  id="username"
  name="username"
  value={undefined}
  onChange={undefined}
  className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
/>
</div> */
