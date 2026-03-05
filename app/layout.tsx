import type { Metadata } from "next";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Talenvo project 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 m-0 p-1">{children}</body>
    </html>
  );
}
