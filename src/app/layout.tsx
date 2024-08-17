import type { Metadata } from "next";
import "./globals.css";
import { aleo, mulish } from "@/fonts/fonts";
import AppFooter from "@/components/layout/app-footer";
import RouteLoadingProvider from "@/components/loaders/RouteLoadingProvider";
import Sidebar from "@/components/layout/app-header/Sidebar";
import AppHeaderWrapper from "@/components/layout/app-header/wrapper";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    template: "%s - Team Bonding Nigeria",
    default: "Team Bonding Nigeria",
  },
  description:
    "We specialize in creating memorable and impactful team bonding experiences for corporate organizations and groups.",
  twitter: {
    card: "summary_large_image",
  },
  keywords: [
    "team bonding",
    "team building",
    "fun games",
    "corporate games",
    "treasure hunt",
    "games",
    "retreat",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish + " " + aleo}>
        <RouteLoadingProvider>
          <div className="flex flex-col min-h-[100vh]">
            <Toaster
              position="bottom-left"
              className="!bg-[#202121] !text-white"
              duration={5000}
              closeButton
            />
            <AppHeaderWrapper />
            <Sidebar />
            <main className="grow">{children}</main>
            <AppFooter />
          </div>
        </RouteLoadingProvider>
      </body>
    </html>
  );
}
