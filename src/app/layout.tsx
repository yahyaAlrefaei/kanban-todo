import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/lib/react-query-provider";
import { ThemeRegistry } from "./theme/ThemeRegistry";

export const metadata: Metadata = {
  title: "Kanban Todo",
  description: "A simple todo app using kanban board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
