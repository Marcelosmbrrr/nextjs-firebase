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
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img
            className="w-8 h-8"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
          />
          FireNext
        </Link>
        <div className="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Change Password
          </h2>
          <div className="my-5">
            {errors.length > 0 && (
              <div className="text-red-600">
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
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {isLoading ? "Loading ..." : "Send Link"}
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Remember your password?{" "}
              <Link
                href="/login"
                className="font-medium text-sky-600 hover:underline dark:text-sky-500"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
