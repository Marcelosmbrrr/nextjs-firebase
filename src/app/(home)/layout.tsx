"use client";

import { useAuth } from "@/hooks/auth";

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

  return (
    <div className="bg-white flex min-h-screen w-full flex-col">{children}</div>
  );
}
