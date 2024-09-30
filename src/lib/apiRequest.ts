import axiosClient from "./axios";


interface ApiRequestProps {
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  method: "post" | "get" | "put" | "delete";
  headers?: Record<string, string>;
}

export const apiRequest = async ({
  url,
  data,
  method,
  headers,
}: ApiRequestProps) => {
  let response;
  switch (method) {
    case "get":
      response = await axiosClient.get(url, { headers });
      break;
    case "post":
      response = await axiosClient.post(url, data, { headers });
      break;
    case "put":
      response = await axiosClient.put(url, data, { headers });
      break;
    case "delete":
      response = await axiosClient.delete(url, { headers, data });
      break;
    default:
      throw new Error(`Unsupported method: ${method}`);
  }
  return response.data;
};
