"use client";

import { useAuth } from "@/hooks/auth";
import { Sidebar } from "@/components/sidebar/Sidebar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isValidating } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: "",
  });

  if (isValidating) {
    return (
      <div className="text-gray-800 flex min-h-screen w-full items-center justify-center bg-gray-100">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-gray-800 flex min-h-screen w-full items-center justify-center bg-gray-100">
        Usuário não autenticado
      </div>
    );
  }

  function openSidebar() {
    document.getElementById("sidebar")?.classList.remove("hidden");
  }

  return (
    <div className="bg-gray-50">
      <header className="flex justify-between lg:justify-end items-center w-full p-4">
        <button
          onClick={openSidebar}
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <div className="flex items-center">
          <div className="flex items-center mr-3">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
            <span className="text-gray-800">{user.displayName}</span>
          </div>
        </div>
      </header>
      <Sidebar />
      <main className="lg:ml-56 p-8 min-h-screen">{children}</main>
    </div>
  );
}
