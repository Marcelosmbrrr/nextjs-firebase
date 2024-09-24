"use client"

import { SnackbarProvider } from "notistack";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen bg-gray-900 antialiased">
        <SnackbarProvider>{children}</SnackbarProvider>
      </body>
    </html>
  );
}
