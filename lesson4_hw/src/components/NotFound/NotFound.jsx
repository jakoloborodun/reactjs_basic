import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
      <div>
        <b>Page not found.</b>
        <Link to={"/"}>To Front</Link>
      </div>
  )
};

export { NotFound };
