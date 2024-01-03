import React from 'react';
import { useSelector } from 'react-redux';

const ComponentC = () => {
  const value = useSelector((state) => state.value);

  return (
    <div>
      <label>Component C</label>
      <div>{value}</div>
    </div>
  );
};

export default ComponentC;