import Header from 'components/Header';
import React, { Component } from 'react';

export declare interface AppProps {
  children?: React.ReactNode;
}

const Layout = (props: AppProps) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
