import Header from 'components/header/Header';
import React from 'react';

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
