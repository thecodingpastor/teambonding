import { getSession } from "next-auth/react";

const getAccessToken = async (): Promise<string | null> => {
  try {
    const session = await getSession();

    // @ts-expect-error //gnore
    const accessToken = session?.user?.accessToken;
    return accessToken || null;
  } catch (error) {
    return null;
  }
};

export default getAccessToken;
