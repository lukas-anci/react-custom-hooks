import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';

const DownCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const int1 = setInterval(() => {
      setCounter((prevState) => prevState - 1);
    }, 1000);
    return () => {
      clearInterval(int1);
    };
  }, []);

  return (
    <Card>
      <h2>DownCounter</h2>
      <h2>{counter}</h2>
    </Card>
  );
};

export default DownCounter;
