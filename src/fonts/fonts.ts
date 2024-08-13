import { Aleo, Mulish } from "next/font/google";

export const mulishFont = Mulish({
  weight: ["300", "400", "600"],
  // display: "swap",
  subsets: ["latin"],
  variable: "--font-mulish",
});

export const aleoFont = Aleo({
  weight: ["600"],
  // display: "swap",
  subsets: ["latin"],
  variable: "--font-aleo",
});

export const mulish = mulishFont.variable;
export const aleo = aleoFont.variable;
