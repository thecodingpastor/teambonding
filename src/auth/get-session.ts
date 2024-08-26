import { getServerSession } from "next-auth";
import { authOptions } from "./auth-options";

export const AppGetSession = async () => {
  return await getServerSession(authOptions);
};
