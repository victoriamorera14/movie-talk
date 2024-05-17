import { useState } from "react";
import { Fetch } from "../api/API";

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState();
  const [error, setError] = useState(null);

  const ApiCall = async (API_URL) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await Fetch(API_URL);
      setMovies(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
   {isLoading, movies, error, ApiCall}
  );
}
