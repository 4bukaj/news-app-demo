import axios from 'axios';
import { useState, useEffect } from 'react';

export function useFetchData<T = unknown>(
  url: string
): {
  data: T | null;
  loading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);

    const fetch = async () => {
      try {
        const { data } = await axios.get<T>(url);
        setData(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}
