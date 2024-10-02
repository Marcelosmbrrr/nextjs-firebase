"use client";

import * as React from "react";
import { useAuth } from "@/hooks/auth";

export default function Page() {
  const { user } = useAuth();

  return (
    <section className="py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <div className="gap-4 sm:flex sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Users
            </h2>
          </div>

          <div className="mt-6 flow-root sm:mt-8">
            <div className="divide-y divide-gray-200">
              <div className="flex flex-wrap items-center gap-y-4 py-6">
                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                  <dt className="text-base font-medium text-gray-500">
                    ID:
                  </dt>
                  <dd className="mt-1.5 text-base font-semibold text-gray-900">
                    <a href="#" className="hover:underline">
                      #FWB134567890
                    </a>
                  </dd>
                </dl>

                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                  <dt className="text-base font-medium text-gray-500">Name:</dt>
                  <dd className="mt-1.5 text-base font-semibold text-gray-900">
                    02.11.2023
                  </dd>
                </dl>

                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                  <dt className="text-base font-medium text-gray-500">
                    E-mail:
                  </dt>
                  <dd className="mt-1.5 text-base font-semibold text-gray-900">
                    $2,056
                  </dd>
                </dl>

                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                  <dt className="text-base font-medium text-gray-500">
                    Status:
                  </dt>
                  <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    <svg
                      className="me-1 h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 11.917 9.724 16.5 19 7.5"
                      />
                    </svg>
                    Confirmed
                  </dd>
                </dl>

                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                  <button
                    type="button"
                    className="w-full rounded-lg bg-sky-700 px-3 py-2 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 lg:w-auto"
                  >
                    Edit User
                  </button>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto"
                  >
                    View details
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-y-4 py-6">
                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                  <dt className="text-base font-medium text-gray-500">
                    Order ID:
                  </dt>
                  <dd className="mt-1.5 text-base font-semibold text-gray-900">
                    <a href="#" className="hover:underline">
                      #FWB146284623
                    </a>
                  </dd>
                </dl>

                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                  <dt className="text-base font-medium text-gray-500">Date:</dt>
                  <dd className="mt-1.5 text-base font-semibold text-gray-900">
                    26.09.2023
                  </dd>
                </dl>

                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                  <dt className="text-base font-medium text-gray-500">
                    Price:
                  </dt>
                  <dd className="mt-1.5 text-base font-semibold text-gray-900">
                    $180
                  </dd>
                </dl>

                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                  <dt className="text-base font-medium text-gray-500">
                    Status:
                  </dt>
                  <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                    <svg
                      className="me-1 h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                    Unverified
                  </dd>
                </dl>

                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                  <button
                    type="button"
                    className="w-full rounded-lg bg-sky-700 px-3 py-2 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 lg:w-auto"
                  >
                    Edit User
                  </button>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto"
                  >
                    View details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
