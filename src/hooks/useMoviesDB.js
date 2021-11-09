import { useEffect, useState } from "react";
import axios from "axios";

export function useMoviesDB(endpoint, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) throw new Error("VPN");
  }, [error]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/${endpoint}?api_key=0789d2e7e4ce91a53c04349a490ffe9e&${new URLSearchParams(
          options?.query
        ).toString()}`
      )
      // .then((r) => r.json())
      .then((res) => setData(res.data))
      .then(() => setLoading(false))
      .catch(setError);
  }, [endpoint, options]);

  return { data, loading };
}
