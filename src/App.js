import React from 'react';
import { useDispatch } from 'react-redux';

import './style.css';
import Child from './Child';
import { addToCart, removeFromCart } from './actions/cart';

export default function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Count in cart: <Child />
      </h1>
      <div className="button-container">
        <button onClick={() => dispatch(addToCart)}>Increment in cart</button>
        <button onClick={() => dispatch(removeFromCart)}>
          Decrement in cart
        </button>
      </div>
    </div>
  );
}
