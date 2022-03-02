/* eslint-disable react-hooks/rules-of-hooks */
// Importing React
import { useState, useEffect } from "react";

// Importing axios
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

// GET
export function getData<T = unknown>(local: string, cpf?: string) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  let query = "";

  if (cpf && cpf.length === 11) {
    query = cpf;
  }

  useEffect(() => {
    api
      .get(`${local}/${query}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [local, query]);

  return { data, isFetching, error };
}
