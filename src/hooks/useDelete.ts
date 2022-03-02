import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export async function deleteData(url: string) {
  const result = await api.delete(url);
  return result;
}
