import { FC, Fragment } from 'react';
import { Header } from './header';

export const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};
