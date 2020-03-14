import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getResult(id);
  }, []);

  const getResult = async id => {
    try {
      const { data } = await yelp.get(`/${id}`);
      setResult(data);
      setErrorMessage('');
    } catch (err) {
      setErrorMessage('Problem loading data');
    }
  };

  return [getResult, result, errorMessage];
};
