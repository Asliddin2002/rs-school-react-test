import Header from 'components/header/Header';
import React from 'react';

export declare interface AppProps {
  children?: React.ReactNode;
}

const Layout = (props: AppProps) => {
  return (
    <div data-testid="layout">
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
