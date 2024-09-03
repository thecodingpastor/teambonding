import getAccessToken from "./auth";

import { getErrorMessage } from "./getErrorMessage";

interface FetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: HeadersInit;
  body?: any;
}

const customFetchClient = async (
  endpoint: string,
  options: FetchOptions = {}
) => {
  const { method = "GET", headers, body } = options;
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`;

  const data: any = await getAccessToken();
  const accessToken = data?.user?.accessToken;

  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
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

export default customFetchClient;
