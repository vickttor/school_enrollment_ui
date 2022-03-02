import axios from "axios";

const api = axios.create({
  baseURL: "https://restfulapi-ax4b.herokuapp.com/",
});

export async function deleteData(url: string) {
  const result = await api.delete(url);
  return result;
}
