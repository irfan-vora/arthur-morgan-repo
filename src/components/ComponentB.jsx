import React from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from '../redux/actions';

const ComponentB = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(setValue(value));
  };

  return (
    <div>
      <label>Component B</label><br /><br />
      <input type="text" onChange={handleChange} />
      <br />
      <br />
    </div>
  );
};

export default ComponentB;