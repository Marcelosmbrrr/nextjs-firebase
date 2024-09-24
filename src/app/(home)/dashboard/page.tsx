"use client";

import * as React from "react";
import { useAuth } from "@/hooks/auth";

export default function Page() {
  const { user, logout } = useAuth();

  return (
    <section className="text-gray-800">
      <h1>Dashboard</h1>
      <p>E-mail is verified: {user?.emailVerified ? "Yes" : "No"}</p>
      <button onClick={logout}>Logout</button>
    </section>
  );
}
