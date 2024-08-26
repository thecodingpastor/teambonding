import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ValidateEmail = (email: string) =>
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
