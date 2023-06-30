import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, {
      signal: abortController.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("There is an error");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setMovies(data.Search);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setLoading(false);
          console.log(err.message);
          setError(err.message);
        }
      });
    return () => abortController.abort();
  }, [url]);

  return { movies, error, loading };
}
