import { api } from "../services/api";

export async function useInsertData<T = unknown>(
  url: string,
  body: T,
  method?: string
) {
  let result;

  if (method && method === "put") {
    result = await api.put(url, body);
    return result;
  }

  result = await api.post(url, body);
  return result;
}
