import React, {useEffect, useState} from 'react';

// custom hook to fetch data from swapi and handle loading, response data, and errors
export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([{ title: 'title', director: 'director' }]);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setError(null);
        setLoading(false);
      })
      .catch(e => {
        console.warn(e.message);
        setError('Error fetching data.');
        setLoading(false);
      });
  }, [url]);

  return { loading, data, error };
}

