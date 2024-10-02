"use client";

import * as React from "react";
import { useAuth } from "@/hooks/auth";

export default function Page() {
  const { user } = useAuth();

  const [name, setName] = React.useState<String>(user.name);
  const [email, setEmail] = React.useState<String>(user?.email);
  const [username, setUsername] = React.useState<String>(user?.displayName);

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">My Account</h2>
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                placeholder="Your name"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                placeholder="Your username"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                E-mail
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                placeholder="Your e-mail"
                required
              />
            </div>
            <div>
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Is Verified
              </label>
              <input
                type="textr"
                id="status"
                value={user?.emailVerified ? "Verified" : "Unverified"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                placeholder="12"
                readOnly
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 hover:bg-sky-800"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
