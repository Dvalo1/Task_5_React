import { useState, useEffect } from 'react';
import axios from 'axios'

export default function getStatistics(apiUrl) {
  const [stats, setStats] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        if (response['data']) {
          setStats(response.data);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
      });
  }, [apiUrl]);
  return {
    stats,
    error,
    loading
  };
}
