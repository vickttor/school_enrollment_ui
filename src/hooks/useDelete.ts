import { api } from "../services/api";

export async function useDeleteData(url: string) {
  const result = await api.delete(url);
  return result;
}
