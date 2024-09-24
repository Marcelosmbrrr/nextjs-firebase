"use client";

import React from "react";
import Link from "next/link";
import { enqueueSnackbar } from "notistack";

import { useAuth } from "@/hooks/auth";

export default function Page() {
  const { forgotPassword } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  // Form
  const [email, setEmail] = React.useState("");
  // Status and Errors
  const [errors, setErrors] = React.useState<string[]>([]);
  const [status, setStatus] = React.useState<string | null>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    forgotPassword({
      email: email,
      setErrors: setErrors,
      setStatus: setStatus,
      setIsLoading: setIsLoading,
    });
  };

  React.useEffect(() => {
    if (status) {
      enqueueSnackbar(status);
    }
  }, [status]);

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="/login"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
          />
          FireNext
        </Link>
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change Password
          </h2>
          <div className="my-5">
            {errors.length > 0 && (
              <div className="text-red-600 dark:text-red-400">
                {errors.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          </div>
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
            >
              {isLoading ? "Loading ..." : "Send Link"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
