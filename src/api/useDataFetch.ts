import { useEffect, useState } from 'react';

const useDataFetch = (search: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = search
    ? `https://the-one-api.dev/v2/movie?name=${search}`
    : 'https://the-one-api.dev/v2/movie';
  useEffect(() => {
    const headers = { Authorization: 'Bearer Z88rGnkvIh6Efnth1xHt' };
    fetch(baseUrl, {
      headers,
    })
      .then((res) => res.json())
      .then((data) => setData(data.docs))
      .finally(() => {
        setLoading(false);
      });
    console.log('a');
  }, [baseUrl]);

  return { data, loading };
};

export default useDataFetch;
