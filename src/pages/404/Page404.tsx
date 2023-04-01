import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className="flex items-center flex-col justify-center h-[100vh] font-semibold ">
      <h2 className="text-4xl mb-5">Oops, Nothing found. 404 !</h2>
      <p>
        <Link data-testid="nav-link" to="/">
          Back to Home
        </Link>
      </p>
    </div>
  );
};
export default Page404;
