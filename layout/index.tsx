import { FC, Fragment } from 'react';
import { Footer } from './footer';
import { Header } from './header';

export const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <section className="section-content">{children}</section>
      <Footer />
    </Fragment>
  );
};
