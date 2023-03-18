import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Page404 extends Component {
  render() {
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
  }
}
