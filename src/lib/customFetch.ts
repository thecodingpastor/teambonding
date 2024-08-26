import { AppGetSession } from "@/auth/get-session";
import { getErrorMessage } from "./getErrorMessage";

interface FetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: HeadersInit;
  body?: any;
}

const customFetch = async (endpoint: string, options: FetchOptions = {}) => {
  const { method = "GET", headers, body } = options;
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`;

  const data: any = await AppGetSession();
  const accessToken = data?.user?.accessToken;

  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
      "x-client-origin":
        typeof window !== "undefined"
          ? window.location.origin
          : "https://foodbridgeng.com",
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}), // Add Authorization header if accessToken is present
    },
    ...(body && { body: JSON.stringify(body) }),
  };

  try {
    const response = await fetch(url, config);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        responseData?.message || `HTTP error! status: ${response.status}`
      );
    }

    return responseData;
  } catch (error) {
    throw getErrorMessage(error);
  }
};

export default customFetch;
