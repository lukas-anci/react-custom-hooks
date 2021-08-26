import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import useCounter from './../../hooks/use-counter';

const UpCounter = () => {
  useCounter(counter);

  return (
    <Card>
      <h2>UpCounter</h2>
      <h2>{counter}</h2>
    </Card>
  );
};

export default UpCounter;
