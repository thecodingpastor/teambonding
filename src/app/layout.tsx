import type { Metadata } from "next";
import "./globals.css";
import { aleo, mulish } from "@/fonts/fonts";
import AppFooter from "@/components/layout/app-footer";
import RouteLoadingProvider from "@/components/loaders/RouteLoadingProvider";
import Sidebar from "@/components/layout/app-header/Sidebar";
import AppHeaderForHomePage from "@/components/layout/app-header/wrapper";
import { Toaster } from "@/components/ui/sonner";
import NextAuthProvider from "@/auth/session-provider";
import AppHeader from "@/components/layout/app-header";

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
          <div className="flex flex-col">
            <NextAuthProvider>
              <Toaster
                position="bottom-left"
                className="!bg-[#202121] !text-white"
                duration={5000}
                closeButton
              />
              <AppHeaderForHomePage>
                <AppHeader />
              </AppHeaderForHomePage>
              <Sidebar />

              <main className="grow h-full">{children}</main>
              <AppFooter />
              <div id="modal-root"></div>
            </NextAuthProvider>
          </div>
        </RouteLoadingProvider>
      </body>
    </html>
  );
}
