import { useEffect, useState } from "react";

export function useMoviesDB(endpoint, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/${endpoint}?api_key=0789d2e7e4ce91a53c04349a490ffe9e&${new URLSearchParams(
        options?.query
      ).toString()}`
    )
      .then((r) => r.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, [endpoint, options]);

  return { data, loading };
}
