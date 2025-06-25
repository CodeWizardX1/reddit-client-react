import React from 'react';
import './Error.css';

export default function Error({ message = "Something went wrong." }) {
  return (
    <div className="error">
      <p>⚠️ {message}</p>
    </div>
  );
}
