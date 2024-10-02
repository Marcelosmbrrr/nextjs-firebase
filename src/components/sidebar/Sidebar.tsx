import * as React from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import { Users, LogOut, CircleUser, LayoutDashboard } from "lucide-react";

export const Sidebar = React.memo(() => {
  const { logout } = useAuth();

  function closeSidebar() {
    document.getElementById("sidebar")?.classList.add("hidden");
  }

  return (
    <aside
      id="sidebar"
      className="fixed top-0 left-0 z-40 w-56 h-screen transition-transform bg-gray-900 dark:bg-gray-900 border-r border-r-gray-800 hidden lg:block"
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li className="lg:hidden">
            <button onClick={closeSidebar} type="button" className="">
              <svg
                className="w-6 h-6 text-white"
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
          </li>

          <li>
            <div className="flex items-center p-2 rounded-lg text-white">
              <Link
                href="/dashboard"
                className="flex items-center mb-6 text-2xl font-semibold text-white"
              >
                <img
                  className="w-8 h-8"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
                />
                FireNext
              </Link>
            </div>
          </li>

          <li>
            <div className="flex items-center p-2 rounded-lg text-white">
              <span className="flex-1 whitespace-nowrap">Modules</span>
            </div>
          </li>

          <Link
            href="/dashboard"
            className="w-full flex items-center p-3 rounded-lg text-white hover:bg-gray-800 cursor-pointer group"
          >
            <div className="flex p-1 rounded">
              <LayoutDashboard className="w-5 h-5 text-white transition duration-75" />
              <span className="ms-3 whitespace-nowrap">Dashboard</span>
            </div>
          </Link>

          <li>
            <div className="flex items-center p-2 rounded-lg text-white">
              <span className="flex-1 whitespace-nowrap">Others</span>
            </div>
          </li>

          <Link
            href="/account"
            className="w-full flex items-center p-3 rounded-lg text-white hover:bg-gray-800 cursor-pointer group"
          >
            <div className="flex p-1 rounded">
              <CircleUser className="w-5 h-5 text-white transition duration-75" />
              <span className="ms-3 whitespace-nowrap">Account</span>
            </div>
          </Link>

          <button
            onClick={logout}
            className="w-full flex items-center p-3 rounded-lg text-white hover:bg-gray-800 cursor-pointer group"
          >
            <div className="flex p-1 rounded">
              <LogOut className="w-5 h-5 text-white transition duration-75" />
              <span className="ms-3 whitespace-nowrap">Sair</span>
            </div>
          </button>
        </ul>
      </div>
    </aside>
  );
});
