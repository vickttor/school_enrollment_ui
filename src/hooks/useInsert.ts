import axios from "axios";

const api = axios.create({
  baseURL: "https://restfulapi-ax4b.herokuapp.com/",
});

export async function insertData<T = unknown>(
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
