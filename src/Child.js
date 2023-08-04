import React, { memo } from 'react';
import { useSelector } from 'react-redux';

const Child = () => {
  console.log('Chld');
  const cartsState = useSelector((state) => state?.carts);
  const count = cartsState?.count;
  return <div>{count}</div>;
};

export default memo(Child);
