// Importing React
import * as useReact from "react";

// Importing axios
import axios from "axios";

// Creating base url

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export function getData<T = unknown>(local: string, cpf?: string) {
  const [data, setData] = useReact.useState<T | null>(null);
  const [isFetching, setIsFetching] = useReact.useState(true);
  const [error, setError] = useReact.useState<Error | null>(null);

  let query = "";

  if (cpf && cpf.length === 11) {
    query = cpf;
  }

  useReact.useEffect(() => {
    api
      .get(`${local}/${query}`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, isFetching, error };
}
