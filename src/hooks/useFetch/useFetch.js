import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const {data: jobs} = await axios.get(url);
      setData(jobs);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  return {data, error, loading};
};

export default useFetch;
